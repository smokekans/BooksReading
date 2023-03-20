import { getLanguage } from 'redux/language/languageSelectors';
import {
  MobileBooksItem,
  MobileBooksList,
  MobileBookText,
  MobileFirstChildContainer,
  MobileLanguageSwitchBlocks,
  MobileLanguageSwitchText,
  MobileTextContainer,
} from 'components/MyTraining/MyTraining.styled';
import { ReactComponent as BookIcon } from '../../components/LibraryTable/svg/bookIconGrey.svg';
import { useSelector } from 'react-redux';
import { langMyTraining } from 'languages/langMyTraining';

export const EmptyBook = () => {
  const lang = useSelector(getLanguage);
  const { author, publishYear, pagesTotal } = langMyTraining;

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
    </>
  );
};
