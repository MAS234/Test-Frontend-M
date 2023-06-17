import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


export default function ChartBarra() {

var numeros = [72, 56, 20, 36, 80, 40, 30,];
var letras = ["S", "M", "T", "W", "T", "F", "S"];


    var misoptions = {
        responsive : false,
        animation : true,
        plugins : {
            legend : {
                display : false
            }
        },
        scales : {
            y : {
                max : 100,
                display: false
            },
            x: {
                ticks: { color: '#FFFF'}
            }
        }
    };
    
    var midata = {
        labels: letras,
        datasets: [
            {
                data: numeros,
                backgroundColor: '#13B497',
                borderColor: 'gray',
                borderRadius: 20,
                barThickness: 12,
                barPercentage: 1
            }
        ]
    };


  return (
    <>
       <Bar data={midata} options={misoptions} />
    </>
  )
}
