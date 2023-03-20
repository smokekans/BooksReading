import ChartLine from 'components/ChartLine/ChartLine';
import MyPurposeToRead from 'components/MyPurposeToRead/MyPurposeToRead';
import { MyTraining } from 'components/MyTraining/MyTraining';
import { Container } from '../../App.styled';
import { ChartWrap, Wrapper } from './Training.styled';
import { ReactComponent as More } from '../../components/LibraryTable/svg/more.svg';
import { NavLinkMore } from '../../components/LibraryTable/LibraryTable.styled';
import useMatchMedia from 'hooks/useMatchMedia';
import { EmptyBook } from 'components/EmptyBook/EmptyBook';
import { useSelector } from 'react-redux';
import { getPlanBooks } from 'redux/planning/planningSelectors';
import { TableComponent } from 'components/MyTraining/Table/Table';
// import AddTraining from 'pages/AddTraining';

const Training = () => {
  const { isMobile } = useMatchMedia();
  const filter = useSelector(getPlanBooks);

  return (
    <>
      <Container>
        <Wrapper>
          <MyPurposeToRead />

          {isMobile && filter.length === 0 && (
            <>
              <EmptyBook />
              <TableComponent />
            </>
          )}

          {!isMobile && (
            <>
              <MyTraining />
            </>
          )}
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
