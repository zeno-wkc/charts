import styles from './PieChart.module.css';
import { Pie } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend
)

export default function PieChart() {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: '# of Votes',
          data: [10, 30, 14, 5, 12, 25],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: ['rgba(255, 54, 235, .4)', 'rgba(74, 162, 235, .4)','rgba(255, 162, 235, .4)', 'rgba(167, 162, 235, .4)', 'rgba(12, 162, 28, .4)', 'rgba(255, 162, 95, .4)'],
          borderWidth: 1
      }]
    })

    setChartOptions({
      indexAxis: 'y',
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: "Daily Revenue" }
      },
      maintainAspectRatio: true, 
      responsive: true    
    })
  }, []);

  return (
    <div>
      <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
    </div>
  )
}