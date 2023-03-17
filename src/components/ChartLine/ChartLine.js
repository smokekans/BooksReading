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
// import { useEffect, useState } from 'react';

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

  
  // const { data } = ({_id: '64142a76d48309d92da85d81', startDate: 1679097600000, finishDate: 1679356800000, owner: '641417233c5e18d54ad0fbe9', book: Array(1), …}
  // book: [{…}]
  // finishDate:1679356800000
  // owner : "641417233c5e18d54ad0fbe9"
  // startDate:1679097600000
  // statistic:[]
  // _id : "64142a76d48309d92da85d81"
  // [[Prototype]] : Object)
  // const [statistic, setStatistic] = useState([]);
  // const [daysLeft, setDaysLeft] = useState(0);
  // useEffect(() => {
  //   if (data) {
  //     setStatistic(data.statistic);
  //     const { startDate } = data;
  //     const { finishDate } = data;
  //     const daysLeft = Math.floor(
  //       (finishDate - startDate) / (1000 * 60 * 60 * 24)
  //     );
  //     setDaysLeft(daysLeft);
  //   }
  // }, [data]);
  // const amountPagesFromStatistic = data?.book?.reduce(
  //   (totalPages, statisticBookInfo) =>
  //     totalPages + statisticBookInfo.amountPages,
  //   0
  // );
  // let amountPagesForDay = 0;
  // if (daysLeft || amountPagesFromStatistic) {
  //   amountPagesForDay = Math.ceil(amountPagesFromStatistic / daysLeft);
  // }

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
  // const labels = statistic?.map(item => item.date);
  // const readPagesFromStatistic = statistic?.map(item => item.amountPages);
  // const pagesToRead = statistic?.map(item => amountPagesForDay);
  const labels = [];
  // const readPagesFromStatistic = [];
  const pagesToRead = 0;
  const dataChart = {
    labels,
    datasets: [
      {
        label: 'План',
        //  data: pathname === '/statistics' ? pagesToRead : [],
        data: [],
        borderColor: '#091E3F',
        backgroundColor: '#091E3F',
        pointRadius: 5,
        lineTension: 0.3,
      },
      {
        label: 'Факт',
        //  data: pathname === '/statistics' ? readPagesFromStatistic : [],
        data: pagesToRead,
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
          <AmountText>КІЛЬКІСТЬ СТОРІНОК / ДЕНЬ</AmountText>
          <AmountValue>
            {/* {pathname === '/statistics' ? amountPagesForDay : 0} */}
          </AmountValue>
        </AxisSignatureBox>
        <TitleLineBox>
          <TitleLineValue>План</TitleLineValue>
          <TitleLineValue>Факт</TitleLineValue>
        </TitleLineBox>
      </ChartInfoBox>
      <ChartBox>
        <Line options={options} data={dataChart} />
      </ChartBox>
    </ChartSectionBox>
  );
};

export default ChartLine;
