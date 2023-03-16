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
    scales: { x: { title: { text: 'hello' } } },
    backgroundColor: '#FF6B08',
    cubicInterpolationMode: 'monotone',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        display: true,
        labels: {
          color: '#FF6B08',
        },
      },
      title: {
        display: false,
        text: 'Кількість сторінок за день',
      },
    },
  };
  const labels = ['start'];
  const planData = [0];
  const factData = [0];
  const data = {
    labels,
    datasets: [
      {
        label: 'plan',
        data: planData,
        borderColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgb(0, 0, 0)',
      },
      {
        label: 'fact',
        data: factData,
        borderColor: '#FF6B08',
        backgroundColor: '#FF6B08',
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default ChartLine;
