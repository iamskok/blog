import React, { Fragment } from "react"
import TreeInstruction from "../../../../components/gatsby-seo-series/tree-instruction"
import Tree from "../../../../../src/components/tree"

const ProjectTree = () => (
  <Fragment>
    <TreeInstruction />
    <Tree>
      <Tree.Folder name="gatsby-seo">
        <Tree.Folder name="articles">
          <Tree.Folder name="golden-retriver" open={false}>
            <Tree.File name="cover.jpg" />
            <Tree.File name="index.mdx" />
          </Tree.Folder>
          <Tree.Folder name="pug" open={false}>
            <Tree.File name="cover.jpg" />
            <Tree.File name="index.mdx" />
          </Tree.Folder>
          <Tree.Folder name="siberian-husky">
            <Tree.File name="cover.jpg" />
            <Tree.File name="index.mdx" />
          </Tree.Folder>
        </Tree.Folder>
        <Tree.Folder name="src">
          <Tree.Folder name="images">
            <Tree.File name="about.jpg" />
            <Tree.File name="blog.jpg" />
            <Tree.File name="contact.jpg" />
            <Tree.File name="home.jpg" />
          </Tree.Folder>
          <Tree.Folder name="components">
            <Tree.Folder name="Layout">
              <Tree.File name="index.jsx" />
            </Tree.Folder>
            <Tree.Folder name="Nav">
              <Tree.File name="index.jsx" />
            </Tree.Folder>
            <Tree.Folder name="SEO" open={false}>
              <Tree.File name="DefaultMeta.jsx" />
              <Tree.File name="OpenGraph.jsx" />
              <Tree.File name="SchemaOrg.jsx" />
              <Tree.File name="Twitter.jsx" />
              <Tree.File name="getActivePages.js" />
              <Tree.File name="getCurrentUrl.js" />
              <Tree.File name="getImageUrls.js" />
              <Tree.File name="index.jsx" />
            </Tree.Folder>
          </Tree.Folder>
          <Tree.Folder name="fragments">
            <Tree.File name="FrontmatterFields.js" />
            <Tree.File name="ImageUrlFields.js" />
          </Tree.Folder>
          <Tree.Folder name="helpers" open={false}>
            <Tree.File name="slashify.js" />
          </Tree.Folder>
          <Tree.Folder name="hooks" open={false}>
            <Tree.File name="useSiteMetadata.js" />
          </Tree.Folder>
          <Tree.Folder name="pages">
            <Tree.File name="about.jsx" />
            <Tree.File name="blog.jsx" />
            <Tree.File name="contact.jsx" />
            <Tree.File name="index.jsx" />
          </Tree.Folder>
          <Tree.Folder name="templates">
            <Tree.File name="article.jsx" />
          </Tree.Folder>
        </Tree.Folder>
        <Tree.Folder name="static" open={false}>
          <Tree.File name="logo.jpg" />
        </Tree.Folder>
        <Tree.File name=".nvmrc" />
        <Tree.File name=".env.development" />
        <Tree.File name=".env.production" />
        <Tree.File name="site-metadata.js" />
        <Tree.File name="gatsby-config.js" />
        <Tree.File name="gatsby-node.js" />
        <Tree.File name="package.json" />
      </Tree.Folder>
    </Tree>
  </Fragment>
)

export default ProjectTree
