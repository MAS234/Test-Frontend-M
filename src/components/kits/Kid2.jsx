import "../../styles/Kid2.css"
import select from  "../../assets/select.svg"
import LineaCurva from "../../utils/LineaCurva"

export default function Kid2() {
  return (
    <>
      <div className="contenedorKid2">
      <div className="contenedorTexto">
        <div>
        <p>451,509</p>
        </div>
        <div className="contenedorDaily">
          This Week
          <img src={select} alt="select" />
        </div>
      </div>
      <p className="tikect">Soles</p>

      <div className="curva">
      <LineaCurva/>
      </div>

    </div>  
    </>
  )
}
