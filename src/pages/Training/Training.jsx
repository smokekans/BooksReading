import ChartLine from 'components/ChartLine/ChartLine';
import MyPurposeToRead from 'components/MyPurposeToRead/MyPurposeToRead';
import { MyTraining } from 'components/MyTraining/MyTraining';
import { Container } from '../../App.styled';
import { ChartWrap, Wrapper } from './Training.styled';
import { ReactComponent as More } from '../../components/LibraryTable/svg/more.svg';
import { NavLinkMore } from '../../components/LibraryTable/LibraryTable.styled';
import useMatchMedia from 'hooks/useMatchMedia';
import AddTraining from 'pages/AddTraining';

const Training = () => {
  const { isMobile } = useMatchMedia();
  return (
    <>
      <Container>
        <Wrapper>
          <MyPurposeToRead />
          <MyTraining />
        </Wrapper>
        <ChartWrap>
          <ChartLine />
        </ChartWrap>
        {isMobile && (
          <>
            <NavLinkMore to="/addtraining">
              <More />
            </NavLinkMore>
          </>
        )}
      </Container>
    </>
  );
};

export default Training;
