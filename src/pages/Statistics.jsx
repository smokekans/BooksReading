import { CountdownYears } from 'components/CountdownYear/CountdownYear';
import { CountdownGoals } from 'components/CountdownGoals/CountdownGoals';
import { MyGoals } from 'components/MyGoalsStatistics/MyGoals';
import { StatisticsBookLIst } from 'components/StatisticsBookLIst/StatisticsBookLIst';
import { StatisticsBookPages } from 'components/StatisticsBookPages/StatisticsBookPages';
import ChartLine from 'components/ChartLine/ChartLine';

const Statistics = () => {
  return (
    <>
      <CountdownYears />
      <CountdownGoals />
      <MyGoals />
      <StatisticsBookLIst />
      <StatisticsBookPages />
      <ChartLine />
    </>
  );
};

export default Statistics;
