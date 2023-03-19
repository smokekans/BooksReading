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
  BoxGoal,
  AccentStl,
} from './MyGoals.styled';

export const MyGoals = () => {
  const endDate = new Date(useSelector(getEndDate)).getTime();
  const startData = Date.now();
  const booksAll = useSelector(getPlanBooks);

  const days = Math.floor((endDate - startData) / (1000 * 60 * 60 * 24));

  const books = booksAll.length;

  const bookLeft = () => {
    const diffPages = booksAll.filter(
      book => book.pagesTotal - book.pagesFinished === 0);
    return diffPages.length;
  };

  return (
    <BoxGoal>
      {/* <WrapStl>
        <TitleStl>My goals</TitleStl>
      </WrapStl> */}
      <WraperStl>
          <WrapStl>
        <TitleStl>My goals</TitleStl>
      </WrapStl>
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
              <AccentStl>{bookLeft()}</AccentStl>
            </BoxStl>
            <LabelStl>Books left</LabelStl>
          </li>
        </ListStl>
      </WraperStl>
    </BoxGoal>
  );
};
