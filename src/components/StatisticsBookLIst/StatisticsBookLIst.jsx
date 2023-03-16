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

export const StatisticsBookLIst = () => {
  const books = useSelector(getPlanBooks);
  console.log(books);
  return (
    <>
      <ListWrapp>
        <HeaderBox>
          <Title>Назва книги</Title>
          <Author>Автор</Author>
          <Year>Рік</Year>
          <Pages>Стор.</Pages>
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
                <AuthorMob>Автор:</AuthorMob>
                <BookAuthor>{author}</BookAuthor>
                <YearMob>Рік:</YearMob>
                <BookYear>{publishYear}</BookYear>
                <PagesMob>Стор.:</PagesMob>
                <BookPages>{pagesTotal}</BookPages>
              </Item>
            )
          )}
        </List>
      </ListWrapp>
    </>
  );
};
