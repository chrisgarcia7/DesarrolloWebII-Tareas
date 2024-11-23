import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/count">Visualizacion Graficas </a>
     
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" href="/promedio">Valor promedio por categoria</Link>
            </li>
            <li className="nav-item">
                <Link   className="nav-link active" href="/total">                      
                Valor total por brandCode
                </Link>
          
            </li>
            <li className="nav-item">
                <Link  className="nav-link active" href="/status">
                        productos disponibles por status
                </Link>
          
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/">Inicio</Link>
            </li>
          
        </ul>

    </div>
</nav>
  )
}
