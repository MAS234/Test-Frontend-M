import { PieChart, Pie, Cell } from "recharts";
import "../styles/CirculoChart.css"

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];

const COLORS = ["#FF4F4F", "#1BD344", "#FFF742", "#3C65F5"];

function CirculoChart() {

    const isMobile = window.innerWidth <= 480; 
  
    const innerRadius = isMobile ? 40 : 25;
    const outerRadius = isMobile ? 80 : 40;

  return (
    <div className="chartContainer">
      <PieChart width={170} height={170}>
        <Pie
          data={data}
          cx={80}
          cy={80}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={10}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  )
}

export default CirculoChart
