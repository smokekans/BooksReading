import { CountdounYears } from 'components/CountdounYear/CountdownYear';
import { CountdounGoals } from 'components/CountdounGoals/CountdownGoals';
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
