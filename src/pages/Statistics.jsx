import { CountdounYears } from "components/CountdownYear/CountdownYear";
import { CountdounGoals } from "components/CountdownGoals/CountdownGoals";
import { MyGoals } from "components/MyGoalsStatistics/MyGoals";

const Statistics = () => {
  return <>
  <CountdounYears/>
  <CountdounGoals/>
  <MyGoals/>
  </>;
};

export default Statistics;
