import { useNavigate } from 'react-router-dom';
import { StyledBackBtn } from 'components/MobileAddBook/MobileAddBook.styled';
import { ReactComponent as BackIcon } from 'components/MobileAddBook/back.svg';
import { Container } from 'App.styled';
import { BooksCustomSelector } from 'components/MyTraining/BooksSelector/BooksSelector';
import { Calendars } from 'components/MyTraining/Calendar/Calendar';
import { langMyTraining } from 'languages/langMyTraining';
import { getLanguage } from 'redux/language/languageSelectors';
import {
  MainTitle,
  MainTitleContainer,
} from 'components/MyTraining/MyTraining.styled';
import { useSelector } from 'react-redux';
import { TableComponent } from 'components/MyTraining/Table/Table';

const AddTraining = () => {
  const navigate = useNavigate();
  const lang = useSelector(getLanguage);
  const { training } = langMyTraining;

  return (
    <Container>
      <StyledBackBtn onClick={() => navigate('/training')}>
        <BackIcon />
      </StyledBackBtn>
      <MainTitleContainer>
        <MainTitle>{training[lang]}</MainTitle>
      </MainTitleContainer>
      <Calendars />
      <BooksCustomSelector />
      <TableComponent />
    </Container>
  );
};

export default AddTraining;
