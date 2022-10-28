import React from "react"

export default function Sidebar() {
  return (
    <aside
      
      className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="../../index3.html" className="brand-link">
        <span className="brand-text font-weight-light">Tienda Mascotas</span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image"></div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>
      </div>

      <nav>
        <ul className="nav nav-pills nav-sidebar flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Productos
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="../../index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Crear producto</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../../index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Listar productos</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../../index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Modificar producto</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
