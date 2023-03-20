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
import {
  ChartSectionBox,
  ChartInfoBox,
  ChartBox,
  AxisSignatureBox,
  TitleLineBox,
  AmountText,
  AmountValue,
  TitleLineValue,
} from './ChartLine.styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getLanguage } from 'redux/language/languageSelectors';
import { langChartLine } from 'languages/langChartLine';
import { useLocation } from 'react-router-dom';

const ChartLine = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const books = useSelector(state => state.planning);
  const lang = useSelector(getLanguage);
  const { pages, plan, fact } = langChartLine;
  const { pathname } = useLocation();
  const [statistic, setStatistic] = useState([]);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    if (books) {
      setStatistic(books.stats);
      const { startDate } = books;
      const { endDate } = books;
      const daysLeft = Math.floor(
        (Date.parse(endDate) - Date.parse(startDate)) / (1000 * 60 * 60 * 24)
      );
      setDaysLeft(daysLeft);
    }
  }, [books]);

  const amountPagesFromStatistic = books?.filter?.reduce(
    (totalPages, statisticBookInfo) =>
      totalPages + statisticBookInfo.pagesTotal,
    0
  );

  let amountPagesForDay = 0;

  if (daysLeft || amountPagesFromStatistic) {
    amountPagesForDay = Math.ceil(amountPagesFromStatistic / daysLeft);
  }
  // const amountPagesForDayCurrent = 0;
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: '#B1B5C2',
          // display: isMobile ? false : true,
          display: true,
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
  };

  const currentReadPagesFromStatistic = statistic?.reduce((prev, value) => {
    return prev + value.pagesCount;
  }, 0);

  const currentAmountPagesForDay = () => {
    if (amountPagesForDay - currentReadPagesFromStatistic < 0) {
      return 0;
    }
    return amountPagesForDay - currentReadPagesFromStatistic;
  };

  console.log(currentReadPagesFromStatistic);

  const labels = statistic?.map(item => item.time);
  const readPagesFromStatistic = statistic?.map(item => item.pagesCount);
  const pagesToRead = statistic?.map(item => {
    if (
      Math.ceil((amountPagesForDay - item.pagesCount) / daysLeft) < 0 ||
      currentAmountPagesForDay() === 0
    ) {
      return 0;
    }
    return Math.ceil((amountPagesForDay - item.pagesCount) / daysLeft);
  });

  console.log(currentAmountPagesForDay());
  console.log(pagesToRead);

  const dataChart = {
    labels,
    datasets: [
      {
        label: 'План',
        data: pathname === '/statistics' ? pagesToRead : [],
        // data: pagesToRead,
        borderColor: '#091E3F',
        backgroundColor: '#091E3F',
        pointRadius: 5,
        lineTension: 0.3,
      },
      {
        label: 'Факт',
        data: pathname === '/statistics' ? readPagesFromStatistic : [],
        // data: readPagesFromStatistic,
        borderColor: '#FF6B08',
        backgroundColor: '#FF6B08',
        pointRadius: 5,
        lineTension: 0.3,
      },
    ],
  };

  return (
    <ChartSectionBox>
      <ChartInfoBox>
        <AxisSignatureBox>
          <AmountText>{pages[lang]}</AmountText>
          <AmountValue>
            {pathname === '/statistics' ? currentAmountPagesForDay() : 0}
          </AmountValue>
        </AxisSignatureBox>
        <TitleLineBox>
          <TitleLineValue>{plan[lang]}</TitleLineValue>
          <TitleLineValue>{fact[lang]}</TitleLineValue>
        </TitleLineBox>
      </ChartInfoBox>
      <ChartBox>
        <Line options={options} data={dataChart} />
      </ChartBox>
    </ChartSectionBox>
  );
};

export default ChartLine;
