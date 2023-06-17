import{
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js"

import {Doughnut} from "react-chartjs-2"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)


export default function ChartCircular() {

  const data = {
    labels: ["35%","10%","55%"],
    datasets: [{
      data: [35,10,55],
      backgroundColor: ["#13B497","#0B6050","#87FFE9"],
      borderColor: ["#272E35"]
    }]
  }

  const options = {
    responsive : true,
    animation : false,
    plugins : {
      legend : {
      }
  }

   
  }

  return(
  <>
 

      <Doughnut
      data={data}
      options={options}
      >

      </Doughnut>
  
  
  </>
    

  )

}
