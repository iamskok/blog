/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { useState, useEffect, Fragment } from "react"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import useLocalStorage from "../../hooks/use-local-storage"
import EyeIcon from "../../assets/icons/eye.inline.svg"
import { REGISTERED_HIT_ENDPOINT } from "../../utils/constants"

const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
}

firebase.initializeApp(config)

const db = firebase.firestore()

const HitCounter = ({ slug }) => {
  const [hits, setHits] = useLocalStorage(`registered-hit-${slug}`, () => null)
  const [blink, setBlink] = useState(false)

  useEffect(() => {
    let unsubscribeFromPostUpdates

    const getHits = async () => {
      try {
        // Increment hits and fetch current value.
        fetch(`${REGISTERED_HIT_ENDPOINT}?slug=${slug}`).then(() => {
          let blinkTimer
          let blinkCounter = 0

          const postRef = db.collection(`posts`).doc(slug)

          // Subscribe on real-time hit updates.
          unsubscribeFromPostUpdates = postRef.onSnapshot(doc => {
            const { hits: registeredHits } = doc.data()

            // Don't blink on initial render.
            if (blinkCounter) {
              setBlink(true)
            }

            blinkCounter++

            setHits(registeredHits)

            if (blinkTimer) {
              clearTimeout(blinkTimer)
              blinkTimer = null
            }

            blinkTimer = setTimeout(() => {
              setBlink(false)
              blinkTimer = null
            }, 400)
          })
        })
      } catch (error) {
        throw new Error(error)
      }
    }

    getHits()

    return () => unsubscribeFromPostUpdates()
  }, [slug, setHits])

  return hits !== null ? (
    <Flex
      sx={{
        fontSize: 2,
        flexDirection: `row`,
        alignItems: `center`,
        backgroundColor: blink ? `primary` : `transparent`,
        transition: `hitCounter`,
        borderRadius: 1,
      }}
    >
      <EyeIcon
        sx={{
          width: `icon`,
          heught: `icon`,
          fill: `text`,
          marginX: 2,
        }}
      />
      <div sx={{ marginX: 2 }}>{hits}</div>
    </Flex>
  ) : (
    <Fragment></Fragment>
  )
}

export default HitCounter
