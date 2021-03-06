module.exports = {
    siteMetadata: require("./sitemetadata.json"),
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`
            }
        }, {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`
            }
        }, {
            resolve: "gatsby-plugin-netlify-cache"
        }, {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [
                    `.mdx`, `.md`
                ],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630
                        }
                    }, {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`, {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "G-HBYQV1CWTB",
                head: true
            }
        },
        `gatsby-plugin-feed-mdx`, {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `My M365 Blog`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/assets/gatsby-icon.png`
            }
        }, {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`
            }
        },
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-postcss',
        // this (optional) plugin enables Progressive Web App + Offline functionality To
        // learn more, visit: https://gatsby.dev/offline `gatsby-plugin-offline`,
    ]
}
