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
import ChartLine from 'components/ChartLine/ChartLine';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyPurposeToRead = () => {
  return (
    <div>
      <h1>Моя мета прочитати</h1>
      <div>
        <span>0</span>
        <p>Кількість книжок</p>
      </div>
      <div>
        <span>0</span>
        <p>Кількість днів</p>
      </div>
      <ChartLine  />
    </div>
  );
};

export default MyPurposeToRead;
