import React from "react"
import Navbar from "../../shared/navbar"
import Sidebar from "../../shared/sidebar"
//esto es
export default function Home() {
  return (
    <div className="wrapper">
      {/*  barra de navegacion superior  */}
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <div className="p-5">
        <h1>Home</h1>
        </div>
        
      </div>
    
    </div>
  )
}
