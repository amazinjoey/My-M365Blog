import React from "react"
import {Link} from "gatsby"
import NavigationBar from "./navigation/navigationBar"
import Footer from "./footer/footer"
import {ThemeProvider} from './navigation/themeContext'

const BlogLayout = ({location, title, children}) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header

    if (isRootPath) {
        header = (
            <h1 className="main-heading">
                <Link to="/">{title}</Link>
            </h1>
        )
    } else {
        header = (
            <Link className="header-link-home" to="/">
                {title}
            </Link>
        )
    }

    return (
        <ThemeProvider>
            <div class="bg-white dark:bg-gray-800 dark:text-gray-200 bg-opacity-100">
                <NavigationBar/>
                <div className="global-wrapper" data-is-root-path={isRootPath}>
                    <header className="global-header">{header}</header>
                    <main>{children}</main>
                    <Footer></Footer>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default BlogLayout