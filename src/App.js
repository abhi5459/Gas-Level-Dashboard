import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: '',
    },
  },
  scales: {
    y1: {
      type: 'linear',
      display: true,
      position: 'left',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm",  "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm", "11:00 pm"];

export default function App() {

  const gas_data = labels.map(() => faker.datatype.number({ min: 0, max: 700 }));

  const data = {
    labels,
    datasets: [
      {
        label: 'Threshold',
        data: labels.map(() => '600'),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'Gas level',
        data: gas_data,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };
  return (
  <div style={{width: "80vw", marginLeft:"10vw"}}>
    <h1 style={{textAlign: "center", color: "grey"}}>Gas Level Dashboard</h1>
    <Line options={options} data={data} />
    {gas_data.map((value, key) => {
      if(value > 600){
        return <h4 style={{textAlign: "center", color: "red"}}>Gas Level not safe at {labels[key]}</h4>
      }
    })}
  </div>
  );
}
