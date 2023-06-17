import select from  "../../assets/select.svg"
import "../../styles/Kid4.css"
import CirculoChart from "../../utils/CirculoChart"
import { Icon } from '@iconify/react';

export default function Kid4() {
  return (
    <>
    <div className="contenedorKid4">

    <div className="chartContainer">
        <CirculoChart />
    </div>

      <div className="desabilitar">

        <div className="contenedorDaily">
        This Week
        <img src={select} alt="select" />
        </div>

        <div>

          <div className="contenedorColor1">

          <div className="gap">
          <Icon icon="mingcute:square-fill" color="#ff4f4f" />
          Tikect A
            </div>

            <div className="gap">
          <Icon icon="mingcute:square-fill" color="#1BD344" />
          Tikect C
            </div>
        
          </div>

          <div className="contenedorColor1">

            <div className="gap">
          <Icon icon="mingcute:square-fill" color="#3C65F5" />
          Tikect B
            </div>

            <div className="gap">
          <Icon icon="mingcute:square-fill" color="#FFF742" />
          Tikect D
            </div>

          </div>
        </div>

      </div>

    </div>

    </>
  )
}
