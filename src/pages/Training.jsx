import ChartLine from 'components/ChartLine/ChartLine';
import MyPurposeToRead from 'components/MyPurposeToRead/MyPurposeToRead';
import { MyTraining } from 'components/MyTraining/MyTraining';

const Training = () => {
  return (
    <>
      <MyTraining />
      <MyPurposeToRead />
      <ChartLine />
    </>
  );
};

export default Training;
