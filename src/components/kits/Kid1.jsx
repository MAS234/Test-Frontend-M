import "../../styles/Kid1.css"
import select from  "../../assets/select.svg"
import BarraProgreso from "../../utils/BarraProgreso"

export default function Kid1() {

  const progressValue = 80;

  return (
    <>
    <div className="contenedorKid1">
      <div className="contenedorTexto">
        <div>
        <p>456K Pcs</p>
        </div>
        <div className="contenedorDaily">
          Daily
          <img src={select} alt="select" />
        </div>
      </div>
      <p className="tikect">Tikect Sold</p>

        <BarraProgreso value={progressValue}/>
    </div> 
    </>
  )
}
