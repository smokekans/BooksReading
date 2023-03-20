import React from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { getPlanBooks } from 'redux/planning/planningSelectors';
import {
  Author,
  AuthorMob,
  BookAuthor,
  BookPages,
  BookTitle,
  BookYear,
  Checked,
  HeaderBox,
  Item,
  List,
  ListWrapp,
  Pages,
  PagesMob,
  Title,
  UnChecked,
  Year,
  YearMob,
} from './StatisticsBookLIst.styled';
import { getLanguage } from 'redux/language/languageSelectors';
import { langLibraryTable } from 'languages/langLibraryTable';

export const StatisticsBookLIst = () => {
  const books = useSelector(getPlanBooks);
  const lang = useSelector(getLanguage);
  const { title, author, publishYear, pagesTotal } = langLibraryTable;

  return (
    <>
      <ListWrapp>
        <HeaderBox>
          <Title>{title[lang]}</Title>
          <Author>{author[lang]}</Author>
          <Year>{publishYear[lang]}</Year>
          <Pages>{pagesTotal[lang]}</Pages>
        </HeaderBox>
        <List>
          {books?.map(
            ({
              _id,
              title,
              author,
              publishYear,
              pagesTotal,
              pagesFinished,
            }) => (
              <Item key={_id}>
                {Number(pagesTotal) !== Number(pagesFinished) ? (
                  <UnChecked></UnChecked>
                ) : (
                  <Checked>
                    <BsCheck2
                      style={{
                        color: '#ff6b08',
                        width: '14px',
                        height: '14px',
                      }}
                    />
                  </Checked>
                )}
                <BookTitle>{title}</BookTitle>
                <AuthorMob>{langLibraryTable.author[lang]}:</AuthorMob>
                <BookAuthor>{author}</BookAuthor>
                <YearMob>{langLibraryTable.publishYear[lang]}:</YearMob>
                <BookYear>{publishYear}</BookYear>
                <PagesMob>{langLibraryTable.pagesTotal[lang]}:</PagesMob>
                <BookPages>{pagesTotal}</BookPages>
              </Item>
            )
          )}
        </List>
      </ListWrapp>
    </>
  );
};
