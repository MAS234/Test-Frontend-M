import "../styles/GraficosPequeños.css"

import Kid1 from "./kits/Kid1"
import Kid2 from "./kits/Kid2"
import Kid3 from "./kits/Kid3"
import Kid4 from "./kits/Kid4"

export default function GraficosPequeños() {
  return (
    <>
    {/* GRAFICOS PEQUEÑOS DIVIDIDOS EN COMPONENTES Y POCISIONADOS CON FLEXBOX */}
    <div className="contenedorGeneral">
      {/* SE DIVIDEN EN DOS DIVS DIFENTES, CADA UNO CONTIENE DOS COMPONENTES  */}
    <div className="contenedorKids">
      <Kid1/>
      <Kid2/>
     </div> 

     <div className="contenedorKids">
      <Kid3/>
      <Kid4/>
     </div>
    </div>
    </>
  )
}
