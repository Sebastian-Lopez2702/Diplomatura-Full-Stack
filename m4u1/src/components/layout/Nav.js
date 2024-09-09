import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/layout/Nav.css'

export default function Nav() {
    return (
        <div>
            <nav className="navbar">
                <div className="img-nombre">
                    <img src="..\img\logo.png" alt="logo" />
                    <h2>Dimensión 3D</h2>
                </div>
                <div className="secciones">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/novedades">Novedades</Link></li>
                        <li><Link to="/proytectos">Proyectos</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
