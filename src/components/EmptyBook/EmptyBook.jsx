import { getLanguage } from 'redux/language/languageSelectors';
import {
  BeginTrainingBtn,
  BeginTrainingBtnContainer,
  MobileBooksItem,
  MobileBooksList,
  MobileBookText,
  MobileFirstChildContainer,
  MobileLanguageSwitchBlocks,
  MobileLanguageSwitchText,
  MobileTextContainer,
} from 'components/MyTraining/MyTraining.styled';
import { ReactComponent as BookIcon } from '../../components/LibraryTable/svg/bookIconGrey.svg';
import { useDispatch, useSelector } from 'react-redux';
import { langMyTraining } from 'languages/langMyTraining';
import { Link } from 'react-router-dom';
import {
  getEndDate,
  getPlanBooks,
  getStartDate,
} from 'redux/planning/planningSelectors';
import { addTrainingConfig } from 'redux/planning/planningOperations';

export const EmptyBook = () => {
  const lang = useSelector(getLanguage);
  const { author, publishYear, pagesTotal } = langMyTraining;
  const filter = useSelector(getPlanBooks);
  const dispatch = useDispatch();
  const stateBody = useSelector(state => state.planning);
  const start = useSelector(getStartDate);
  const end = useSelector(getEndDate);
  const { startTraining } = langMyTraining;

  const handleBeginTrainingBtn = () => {
    dispatch(addTrainingConfig(stateBody));
  };

  return (
    <>
      <MobileBooksList>
        <MobileBooksItem>
          <MobileFirstChildContainer>
            <p>
              <BookIcon style={{ marginRight: '14px' }} />
              ...
            </p>
          </MobileFirstChildContainer>
          <MobileTextContainer>
            <MobileLanguageSwitchBlocks>
              <MobileLanguageSwitchText>
                {author[lang]}:
              </MobileLanguageSwitchText>
              <MobileLanguageSwitchText>
                {publishYear[lang]}:
              </MobileLanguageSwitchText>
              <MobileLanguageSwitchText>
                {pagesTotal[lang]}:
              </MobileLanguageSwitchText>
            </MobileLanguageSwitchBlocks>
            <div>
              <MobileBookText>...</MobileBookText>
              <MobileBookText>...</MobileBookText>
              <MobileBookText>...</MobileBookText>
            </div>
          </MobileTextContainer>
        </MobileBooksItem>
      </MobileBooksList>
      <BeginTrainingBtnContainer>
        <Link to="/statistics">
          {filter.length > 0 && start && end ? (
            <BeginTrainingBtn onClick={handleBeginTrainingBtn} type="button">
              {startTraining[lang]}
            </BeginTrainingBtn>
          ) : (
            ''
          )}
        </Link>
      </BeginTrainingBtnContainer>
    </>
  );
};
