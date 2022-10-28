import React from "react"

export default function Login() {

  function formulario( event ) {

    event.preventDefault()

    const {password, email} = event.target

  
    console.log("email: "+ email.value + " contraseña: " + password.value)
  }



  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="#">
            <b>Tienda de Dulces</b>
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Inicia sesión</p>
            <form onSubmit={ formulario }>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Correo electrónico"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Contraseña"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Recuérdame</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-info btn-block">
                    Inicia sesión
                  </button>
                </div>
              </div>
            </form>
            <p className="mb-1">
              <a href="forgot-password.html">Olvide mi contraseña</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">
                ¿No tienes cuenta? Registrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
