import ChartLine from 'components/ChartLine/ChartLine';
import MyPurposeToRead from 'components/MyPurposeToRead/MyPurposeToRead';
import { MyTraining } from 'components/MyTraining/MyTraining';
import { Container } from '../App.styled';

const Training = () => {
  return (
    <>
      <Container>
        <MyTraining />
        <MyPurposeToRead />
        <ChartLine />
      </Container>
    </>
  );
};

export default Training;
