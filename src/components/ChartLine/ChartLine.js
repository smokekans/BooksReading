import { Line } from 'react-chartjs-2';
export const options = {
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

const ChartLine = () => {
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
