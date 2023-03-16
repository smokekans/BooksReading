import { Line } from 'react-chartjs-2';
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartLine = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: '#B1B5C2',
          display:  true,
          tickWidth: 0,
          borderColor: '#B1B5C2',
        },
        title: {
          display: true,
          text: 'ЧАС',
          align: 'end',
          color: '#091E3F',
          padding: -3,
          font: {
            size: 12,
            weight: 600,
            family: 'Montserrat',
            lineHeight: 1.25,
          },
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          color: '#B1B5C2',
          display: false,
          borderColor: '#B1B5C2',
        },
        position: 'left',
        ticks: {
          display: false,
        },
      },
      y2: {
        grid: {
          color: '#B1B5C2',
          display: false,
          borderColor: '#B1B5C2',
        },
        position: 'right',
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
<<<<<<< HEAD
  };
=======
  },
};

const ChartLine = () => {
>>>>>>> main
  const labels = ['start'];
  const planData = [0];
  const factData = [0];
  const data = {
    labels,
    datasets: [
      {
        label: 'План',
        data: planData,
        borderColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgb(0, 0, 0)',
      },
      {
        label: 'Факт',
        data: factData,
        borderColor: '#FF6B08',
        backgroundColor: '#FF6B08',
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default ChartLine;
