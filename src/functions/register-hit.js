// const firebase = require("firebase")
const firebase = require("firebase/compat/app")
require("firebase/compat/firestore")

const {
  GATSBY_FIREBASE_API_KEY,
  GATSBY_FIREBASE_AUTH_DOMAIN,
  GATSBY_FIREBASE_DATABASE_URL,
  GATSBY_FIREBASE_PROJECT_ID,
} = process.env

const config = {
  apiKey: GATSBY_FIREBASE_API_KEY,
  authDomain: GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: GATSBY_FIREBASE_DATABASE_URL,
  projectId: GATSBY_FIREBASE_PROJECT_ID,
}

// Check if Firebase wasn't previously initialized.
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()

const initialPostDoc = {
  hits: 1,
}

exports.handler = async event => {
  const { slug } = event.queryStringParameters
  const collectionName = `posts`

  const postRef = db.collection(collectionName).doc(slug)
  let postDoc = await postRef.get()

  const isPostDocExists = postDoc.exists

  if (isPostDocExists) {
    const increment = firebase.firestore.FieldValue.increment(1)
    await postRef.update({ hits: increment })
  } else {
    // Create post document if it didn't exist.
    await postRef.set(initialPostDoc)
    // Update post doc value
    postDoc = await postRef.get()
  }

  const { hits: registeredHits } = postDoc.data()

  return {
    statusCode: 200,
    body: JSON.stringify({
      hits: registeredHits,
    }),
  }
}
