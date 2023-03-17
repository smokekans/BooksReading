import { useSelector } from 'react-redux';
import { getEndDate } from 'redux/planning/planningSelectors';
import { getPlanBooks } from 'redux/planning/planningSelectors';
import {
  TitleStl,
  WrapStl,
  WraperStl,
  ListStl,
  СolonStl,
  LabelStl,
  BoxStl,
  AccentStl,
} from './MyGoals.styled';

export const MyGoals = () => {
  const endDate = new Date(useSelector(getEndDate)).getTime();
  const startData = Date.now();
  const booksAll = useSelector(getPlanBooks);
  const {pagesFinished, pagesTotal} = useSelector(getPlanBooks);
  console.log(booksAll);
  const days = Math.floor((endDate - startData) / (1000 * 60 * 60 * 24));

  const books = booksAll.length;

  const getLastBook = ({pagesFinished, pagesTotal}) => {
    const finishedBook = booksAll.filter(
      book => book.pagesTotal === book.pagesFinished
    );
    return finishedBook;
    console.log( finishedBook)
  };
  // console.log( getLastBook)

  return (
    <section>
      <WrapStl>
        <TitleStl>My goals</TitleStl>
      </WrapStl>
      <WraperStl>
        <ListStl>
          <li>
            <BoxStl>
              <СolonStl>{books}</СolonStl>
            </BoxStl>
            <LabelStl>Amount of books</LabelStl>
          </li>
          <li>
            <BoxStl>
              <СolonStl>{days}</СolonStl>
            </BoxStl>
            <LabelStl>Amount of days</LabelStl>
          </li>
          <li>
            <BoxStl>
              <AccentStl>00</AccentStl>
            </BoxStl>
            <LabelStl>Books left</LabelStl>
          </li>
        </ListStl>
      </WraperStl>
    </section>
  );
};
