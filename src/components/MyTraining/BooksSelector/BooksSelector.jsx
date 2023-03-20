import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBooks, filteredBooksList } from 'redux/planning/planningSlice';
import {
  BooksContainer,
  BooksSelector,
  Button,
  SelectorAndListContainer,
  SelectorArrow,
  SelectorItem,
  SelectorItemContainer,
  SelectorText,
} from '../MyTraining.styled';
import { langMyTraining } from 'languages/langMyTraining';
import { getLanguage } from 'redux/language/languageSelectors';

export const BooksCustomSelector = () => {
  const lang = useSelector(getLanguage);
  const { chooseBooks, add } = langMyTraining;
  const state = useSelector(state => state.book.book.goingToRead);
  const filter = useSelector(state => state.planning.filter);
  const [id, setId] = useState(null);
  const [list, setList] = useState(false);
  const [selector, setSelector] = useState(chooseBooks[lang]);
  const dispatch = useDispatch();

  // перевірка на відсутність однакових книжок у списку

  const handleReadId = e => {
    if (e.target.localName === 'div') {
      setList(!list);
    } else if (e.target.localName === 'li') {
      setSelector(e.target.innerText);
      setId(e.target.id);
      setList(!list);
    }
  };

  // функція-слухач кліку на кнопці Додати,
  const handleAddBtn = e => {
    dispatch(addToBooks(id));
    const checkSameId = filter.map(book => book._id)?.incudes(id);
    state.forEach(book => {
      if (checkSameId === false) {
        return;
      } else if (book._id === id) {
        dispatch(filteredBooksList(book));
      }
    });
  };

  return (
    <>
      <BooksContainer onClick={handleReadId}>
        <SelectorAndListContainer>
          <BooksSelector>
            <SelectorText>{selector}</SelectorText>
            <SelectorArrow
              width="13"
              height="6"
              viewBox="0 0 13 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 6L0.870834 0.750001L12.1292 0.75L6.5 6Z"
                fill="#242A37"
              />
            </SelectorArrow>
          </BooksSelector>
          {list ? (
            <SelectorItemContainer>
              {state.map(({ _id, title }) => {
                return (
                  <SelectorItem key={_id} id={_id}>
                    {title}
                  </SelectorItem>
                );
              })}
            </SelectorItemContainer>
          ) : (
            ''
          )}
        </SelectorAndListContainer>
        <Button onClick={handleAddBtn} type="button">
          {add[lang]}
        </Button>
      </BooksContainer>
    </>
  );
};
