import select from "../assets/select.svg";
import "../styles/MasVendido.css";
import ChartCircular from "./charts/ChartCircular";
import ChartBarra from "./charts/ChartBarra";
import GraficosPequeños from "./GraficosPequeños";
import { Icon } from "@iconify/react";

export default function MasVendido() {
  return (
    <>
    {/* PRIMER CUADRO, CONTIENE EL CIRCULO Y LAS BARRAS  */}
      <div className="contenedor">
        <div className="alinear">
          <p className="minititulo">Best Selling</p>

          <div className="selectimg">
            <p>This wook</p>
            <img src={select} alt="select" />
          </div>
        </div>

        <div className="barra">
          <p>Tuesday</p>

          <p>215,523 pcs</p>
        </div>

        <div className="ContenedorchartCircular">
          <div className="contenedorGraficos">
            <div className="ChartContenedor">
              {/* CIRCULO GRAFICO  */}
              <ChartCircular />

              {/* PALETA DE COLORES DEL CIRCULO  */}
              <div className="contenedorColores">
                <div>
                  <Icon
                    className="iconoCuadrado"
                    icon="ion:square"
                    color="#87ffe9"
                  />
                  <p>Movies Tikect</p>
                </div>

                <div>
                  <Icon
                    className="iconoCuadrado"
                    icon="ion:square"
                    color="#13B497"
                  />
                  <p>Music Tikect</p>
                </div>

                <div>
                  <Icon
                    className="iconoCuadrado"
                    icon="ion:square"
                    color="#0B6050"
                  />
                  <p>Football Tikect</p>
                </div>
              </div>
            </div>
            {/* BARRA  */}
            <div className="contenedorBarra desabilitar">
              <ChartBarra />
            </div>
          </div>
        </div>
      </div>

      {/* GRAFICOS RESTANTES DE LA PARTE DE ABAJO, NOMBRADOS GRAFICOS PEQUEÑOS  */}
      <div>
        <GraficosPequeños/>
      </div>
    </>
  );
}
