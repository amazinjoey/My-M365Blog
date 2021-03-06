import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card/card";
import Hero from "../components/hero/hero"


const BlogIndex = ({data, location}) => {
    const siteTitle = data.site.siteMetadata
        ?.title || `Title`
    const posts = data.allMdx.nodes

    if (posts.length === 0) {
        return (
            <Layout location={location} title={siteTitle}>
                <SEO title="All posts"/>
                <p>
                    No blog posts found. Add markdown posts to "content/blog" (or the directory you
                    specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).
                </p>
            </Layout>
        )
    }

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All posts"/>
            <div>
            <div class="container mx-auto">
                <Hero title={siteTitle} description={data.site.siteMetadata.description} />
                </div>
                <div class="container flex mx-auto ">
                    <div class="my-1 px-1 w-full grid grid-cols-4">
                        {posts.map(post => {
                            const title = post.frontmatter.title || post.fields.slug
                            const slug = post.fields.slug
                            return (
                                <div>
                                    <Card
                                        title={title}
                                        date={post.frontmatter.date}
                                        description={post.frontmatter.description}
                                        category={post.frontmatter.category}
                                        href={slug}
                                        />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql `
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
        }
      }
    }
  }
`
