import { CountdownYears } from 'components/CountdownYear/CountdownYear';
import { CountdownGoals } from 'components/CountdownGoals/CountdownGoals';
import { MyGoals } from 'components/MyGoalsStatistics/MyGoals';

const Statistics = () => {
  return (
    <>
      <CountdownYears />
      <CountdownGoals />
      <MyGoals />
    </>
  );
};

export default Statistics;
