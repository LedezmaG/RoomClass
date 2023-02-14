import React, { useState } from 'react'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'

import '../../styles/Layout.css'
import '../../styles/App.css'

export const Layout = ({ children }) => {

    const [theme, setTheme] = useState('ligth')
    const onTheme = (newTheme) => setTheme(newTheme)

    return (
        <div className="main-content d-flex" data-theme={theme}>
            <Sidebar />
            <div className="content-wrapper container">
                <section className="">{children}</section>
                <Footer />
            </div>
        </div>
    )
}
