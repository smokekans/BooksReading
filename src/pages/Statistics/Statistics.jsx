import { CountdownYears } from 'components/CountdownYear/CountdownYear';
import { CountdownGoals } from 'components/CountdownGoals/CountdownGoals';
import { MyGoals } from 'components/MyGoalsStatistics/MyGoals';
import { StatisticsBookLIst } from 'components/StatisticsBookLIst/StatisticsBookLIst';
import { StatisticsBookPages } from 'components/StatisticsBookPages/StatisticsBookPages';
import ChartLine from 'components/ChartLine/ChartLine';
import { Container } from 'App.styled';
import { StatsWrapp, Wraper } from './Statistics.styled';

const Statistics = () => {
  return (
    <Container>
      <StatsWrapp>
        <Wraper>
          <CountdownYears />
          <CountdownGoals />
        </Wraper>
        <MyGoals />
        <StatisticsBookLIst />
        <ChartLine />
        <StatisticsBookPages />
      </StatsWrapp>
    </Container>
  );
};

export default Statistics;
