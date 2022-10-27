import React from "react"

export default function Sidebar() {
  return (
    <aside style={ {height: "100vh"} } className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="../../index3.html" class="brand-link">
        <span class="brand-text font-weight-light">Tienda Mascotas</span>
      </a>

      <div className="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image"></div>
          <div class="info">
            <a href="#" class="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>
      </div>

      <nav>
        <ul
          className="nav nav-pills nav-sidebar flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Productos
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="../../index.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Crear producto</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../../index2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Listar productos</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../../index3.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
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
