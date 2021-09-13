/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useReducer, Fragment } from "react"
import CodeBlock from "../../../../../src/components/code-block"
import PageSelector from "../common/page-selector"
import { SchemaCheckbox, SchemaCheckboxList } from "./schema-checkbox"
import {
  breadcrumbs,
  person,
  address,
  organization,
  speakable,
} from "./schemas"
import composeSchema from "./compose-schema"
import { SITE_METADATA } from "../common/constants"

const {
  siteUrl,
  language,
  pages: { home, blog, contact, about, article },
} = SITE_METADATA

const pageMetadata = ({ type, url, title, description, images }) => ({
  "@type": type,
  name: title,
  headline: title,
  description,
  url,
  mainEntityOfPage: url,
  image: images,
  inLanguage: language,
  author: {
    "@id": `${siteUrl}/#person`,
  },
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
})

const breadcrumbsMetadata = (
  secondItem,
  thirdItem = {},
  breadcrumbsBase = breadcrumbs
) => ({
  ...breadcrumbsBase,
  itemListElement: [
    {
      ...breadcrumbsBase.itemListElement[0],
    },
    {
      "@type": `ListItem`,
      position: 2,
      name: secondItem.title,
      item: {
        "@type": `WebPage`,
        "@id": secondItem.url,
      },
    },
    thirdItem.title && {
      "@type": `ListItem`,
      position: 3,
      name: thirdItem.title,
      item: {
        "@type": `WebPage`,
        "@id": thirdItem.url,
      },
    },
  ].filter(Boolean),
})

const initialState = {
  showPage: true,
  showAddress: false,
  showPerson: false,
  showOrganization: false,
  showBreadcrumbs: false,
  hideBreadcrumbsSelector: true,
  schema: {
    page: {
      ...pageMetadata(home),
      speakable,
    },
    address,
    person,
    organization,
  },
}

const reducer = (state, { type }) => {
  switch (type) {
    case `home`:
      return {
        ...state,
        schema: {
          page: {
            ...pageMetadata(home),
            speakable,
          },
          address,
          person,
          organization,
        },
      }
    case `blog`:
      return {
        ...state,
        schema: {
          page: pageMetadata(blog),
          address,
          person,
          organization,
          breadcrumbs: breadcrumbsMetadata(blog),
        },
      }
    case `about`:
      return {
        ...state,
        schema: {
          page: {
            ...pageMetadata(about),
            speakable,
          },
          address,
          person,
          organization,
          breadcrumbs: breadcrumbsMetadata(about),
        },
      }
    case `contact`:
      return {
        ...state,
        schema: {
          page: {
            ...pageMetadata(contact),
            speakable,
          },
          address,
          person,
          organization,
          breadcrumbs: breadcrumbsMetadata(contact),
        },
      }
    case `article`:
      return {
        ...state,
        schema: {
          page: {
            ...pageMetadata(article),
            datePublished: article.published,
            dateModified: article.modified,
            speakable,
          },
          address,
          person,
          organization,
          breadcrumbs: breadcrumbsMetadata(blog, article),
        },
      }
    case `address`:
      return {
        ...state,
        showAddress: !state.showAddress,
      }
    case `person`:
      return {
        ...state,
        showPerson: !state.showPerson,
      }
    case `organization`:
      return {
        ...state,
        showOrganization: !state.showOrganization,
      }
    case `breadcrumbs`:
      return {
        ...state,
        showBreadcrumbs: !state.showBreadcrumbs,
      }
    case `page`:
      return {
        ...state,
        showPage: !state.showPage,
      }
  }
}

const SchemaOrgPlayground = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [currentSchema, setCurrentSchema] = useState(`home`)

  const handlePageSelection = event => {
    const selectedSchema = event.target.value
    dispatch({ type: selectedSchema })
    setCurrentSchema(selectedSchema)
  }

  return (
    <Fragment>
      <PageSelector onChange={handlePageSelection} />
      {SchemaCheckboxList
        /* Hide breadcrumbs selector for Home schema */
        .filter(
          ({ type }) => !(type === `breadcrumbs` && currentSchema === `home`)
        )
        .map(({ label, type, isChecked }) => (
          <SchemaCheckbox
            key={type}
            label={label}
            onChange={() => dispatch({ type })}
            isChecked={isChecked}
          />
        ))}
      <CodeBlock className="language-json">
        {JSON.stringify(composeSchema(state), null, 2)}
      </CodeBlock>
    </Fragment>
  )
}

export default SchemaOrgPlayground
