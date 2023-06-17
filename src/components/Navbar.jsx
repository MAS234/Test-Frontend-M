import { useState } from "react";
import "../styles/Navbar.css";
import { Icon } from "@iconify/react";
import Logo from "../assets/logo.png";
import select from "../assets/select.svg";

export default function Navbar() {
  const [Open, setOpen] = useState(false);

  return (
    <div className={`navBar ${Open && "open"}`}>
      <div className={`items ${Open && "open"}`}>
        <a href="#">Inicio</a>
        <a href="#">Graficos</a>
      </div>

      <div className="contenedorHamburguesa">
        <div
          className={`toggle ${Open && "open"}`}
          onClick={() => setOpen(!Open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div>
          <img className="logo" src={Logo} alt="logo" />
        </div>
      </div>

      {/* DESABILITA LA BARRA DE BUSQUEDA CUANDO ESTA EN MOVIL */}
      <div className="desabilitar">
        <div className="contenedorBusqueda">
          <div className="contenedorInput">
            <input type="text" placeholder="Search here" />
            <Icon icon="carbon:search" color="#a4a4a4" className="icono" />
          </div>
          <Icon icon="iconoir:settings" color="white" className="iconoConfi" />
        </div>
      </div>

      <div className="cotenedorNotiYPerfil">
        <div>
          <Icon
            icon="carbon:notification"
            className="iconoNoti "
            color="#13b497"
          />
          <Icon
            icon="mingcute:message-4-line"
            // DESABILITA LA NOTIFICACION
            className="iconoNoti desabilitar"
            color="#13b497"
          />
          <Icon icon="el:gift" className="iconoNoti desabilitar" color="gray" />
        </div>

        <div className="contenedorPerfil">
          <Icon icon="fa6-solid:user" color="white" className="perfil" />
         {/* DESABILITA EL NOMBRE DEL USUARIO */}
          <p className="desabilitar">David</p>
          <img src={select} alt="select" />
        </div>
      </div>
    </div>
  );
}
