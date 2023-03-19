import ChartLine from 'components/ChartLine/ChartLine';
import MyPurposeToRead from 'components/MyPurposeToRead/MyPurposeToRead';
import { MyTraining } from 'components/MyTraining/MyTraining';
import { Container } from '../App.styled';
import { Wrapper } from './Training.styled';

const Training = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <MyPurposeToRead />
          <MyTraining />
        </Wrapper>

        <ChartLine />
      </Container>
    </>
  );
};

export default Training;
