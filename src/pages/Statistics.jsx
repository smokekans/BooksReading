import { CountdownYears } from 'components/CountdownYear/CountdownYear';
import { CountdownGoals } from 'components/CountdownGoals/CountdownGoals';
import { MyGoals } from 'components/MyGoalsStatistics/MyGoals';
import { StatisticsBookLIst } from 'components/StatisticsBookLIst/StatisticsBookLIst';
import { StatisticsBookPages } from 'components/StatisticsBookPages/StatisticsBookPages';

const Statistics = () => {
  return (
    <>
      <CountdounYears />
      <CountdounGoals />
      <MyGoals />
      <StatisticsBookLIst />
      <StatisticsBookPages />
    </>
  );
};

export default Statistics;
