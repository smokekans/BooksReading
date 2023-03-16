import React from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import {
  getFinishedPages,
  getTotalPages,
} from 'redux/planning/planningSelectors';
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
  const books = useSelector(state => state.book.book.goingToRead);
  const finishedPages = useSelector(getFinishedPages);
  const totalPage = useSelector(getTotalPages);

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
          {books?.map(({ title, author, publishYear, totalPages }) => (
            <Item key={title}>
              {totalPage <= finishedPages ? (
                <Checked>
                  <BsCheck2
                    style={{
                      color: '#ff6b08',
                      width: '14px',
                      height: '14px',
                    }}
                  />
                </Checked>
              ) : (
                <UnChecked></UnChecked>
              )}
              <BookTitle>{title}</BookTitle>
              <AuthorMob>Автор:</AuthorMob>
              <BookAuthor>{author}</BookAuthor>
              <YearMob>Рік:</YearMob>
              <BookYear>{publishYear}</BookYear>
              <PagesMob>Стор.:</PagesMob>
              <BookPages>{totalPages}</BookPages>
            </Item>
          ))}
        </List>
      </ListWrapp>
    </>
  );
};
