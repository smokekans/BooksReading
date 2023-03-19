import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBooks, filteredBooksList } from "redux/planning/planningSlice";
import { BooksContainer, BooksSelector, Button, SelectorArrow, SelectorItem, SelectorItemContainer, SelectorText } from "../MyTraining.styled";
import { langMyTraining } from "languages/langMyTraining"; 
import { getLanguage } from "redux/language/languageSelectors";

export const BooksCustomSelector = () => {
    const lang = useSelector(getLanguage);
    const { chooseBooks, add } = langMyTraining;
    const state = useSelector(state => state.book.book.goingToRead);
    const filter = useSelector(state => state.planning.filter);
    const filterId = filter.map(filterBook => filterBook._id);
    const [id, setId] = useState(null);
    const [list, setList] = useState(false);
    const [selector, setSelector] = useState(chooseBooks[lang])
     const dispatch = useDispatch();
   
    
  // зчитування id з селектору
    const handleReadId = e => {
      setSelector(e.target.innerText);
    setList(!list)
    setId(e.target.id);
  };

  // функція-слухач кліку на кнопці Додати, перевірка на відсутність однакових книжок у списку
  const handleAddBtn = e => {
    dispatch(addToBooks(id));
    if (filterId?.toString() === id?.toString()) {
      return;
    }
    state.forEach(book => {
      if (book._id === id) {
        dispatch(filteredBooksList(book));
      }
    });
  };

    return (
        <>
         <BooksContainer>
        <BooksSelector onClick={handleReadId}>
          <SelectorText>{selector}</SelectorText>
          {list ?<SelectorItemContainer>
            {state.map(({ _id, title }) => {
              return (
                <SelectorItem key={_id} id={_id}>
                  {title}
                </SelectorItem>
              );
            })} 
            </SelectorItemContainer>:''}
        <SelectorArrow width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 6L0.870834 0.750001L12.1292 0.75L6.5 6Z" fill="#242A37" />
      </SelectorArrow>
        </BooksSelector>
      <Button onClick={handleAddBtn} type="button">
        {add[lang]}
        </Button>
      </BooksContainer>
        </>
)
}