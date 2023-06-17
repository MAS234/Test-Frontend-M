import "../../styles/Kid3.css"
import select from  "../../assets/select.svg"
import DobleCurva from "../../utils/DobleCurva"

export default function Kid3() {
  return (
    <>
      <div className="contenedorKid3">
      <div className="contenedorTexto">
        <div>
        <p>$456,623</p>
        </div>
        <div className="contenedorDaily">
          Monthly
          <img src={select} alt="select" />
        </div>
      </div>
      <p className="tikect">Income</p>

      <DobleCurva/>
    </div>  
    </>
  )
}
