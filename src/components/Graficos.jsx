import MasVendido from "./MasVendido"
import SectorDos from "./SectorDos"
import "../styles/Graficos.css"

export default function Graficos() {
  return (
    <>

    {/* BARRA DASHBOARD, SE DESABILITA AL PASAR A MOVIL  */}
    <div className="linea desabilitar">
        <p>Dashboard /</p>
    </div>

    <div className="contenedorGraficos">
        <div className="primerSector">
            {/* // DESABILITA LA NOTIFICACION
          MAS VENDIDO : SERIA  EL PRIMER SECTOR, ACA ESTAN EL GRAFICO GRANDE Y LOS GRAFICOS PEQUEÑOS */}
            <MasVendido/>
        </div>

        <div className="segundoSector">
          {/* SECTOR DOS, ACA SE ENCUENTRA EL SLIDER Y LAS BARRAS GRAFICAS */}
          <SectorDos/>
        </div>
    </div>
      
    </>
  )
}
