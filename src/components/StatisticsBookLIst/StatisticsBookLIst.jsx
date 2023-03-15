import React from 'react';
import { BsCheck2 } from 'react-icons/bs';
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
  const items = [
    {
      title: 'The Book of Five Rings',
      author: 'Miyamoto Musashi',
      publishYear: 1643,
      totalPages: 110,
    },
    {
      title: 'The Book of Five Rings2',
      author: 'Miyamoto',
      publishYear: 1643,
      totalPages: 110,
    },
    {
      title: 'The Book of Five Rings3',
      author: 'Miyamoto',
      publishYear: 1991,
      totalPages: 110,
    },
    {
      title: 'The Book of Five Rings6',
      author: 'Miyamoto Musashi',
      publishYear: 1643,
      totalPages: 110,
    },
    {
      title: 'The Book of Five Rings5',
      author: 'Miyamoto Musashi',
      publishYear: 1643,
      totalPages: 110,
    },
    {
      title: 'The',
      author: 'Miyamoto Musashi',
      publishYear: 1643,
      totalPages: 110,
    },
  ];
  // const listBook = useSelector(getBook);
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
          {items.map(({ title, author, publishYear, totalPages }) => (
            <Item key={title}>
              {false ? (
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
