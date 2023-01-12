import React from 'react'
import './Layout.css'
import Footer from '../componentes/Footer/Footer'
import Navegador from '../componentes/navegador/Navegador'


export default function Layout(props) {
    return (
        <>
            <Navegador/>
            <div className="content-layout">{props.children}</div>
            <Footer />
        </>
    )
}
