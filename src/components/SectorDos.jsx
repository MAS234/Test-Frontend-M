import sales from "../assets/salesComparision.png"
import Slider from "../utils/Slider"

import "../styles/SectorDos.css"

function SectorDos() {
  return (
    <>

    <div className="contenedorSectorDos">
        <div className="desabilitar">
            <img src={sales} alt="sales" className="sales" />
        </div>

        <div className="contenedorSlider">
            <p>Event Galleries</p>
        <div className="slider">
            <Slider/>
        </div>
        </div>


    </div>
      
    </>
  )
}

export default SectorDos
