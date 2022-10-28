import React from "react"

export default function Navbar() {
  return (
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button">
          <i class="fas fa-bars"></i>
        </a>
        <li className="nav-item">
          <a className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Producto</a>
        </li>
      </ul>
    </nav>
  )
}
