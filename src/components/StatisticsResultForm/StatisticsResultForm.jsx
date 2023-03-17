import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  DataBox,
  ErrorMessage,
  FormRes,
  InputPages,
  LabelDate,
  LabelPages,
  PageBox,
  ResultBox,
  ResultBtn,
  ResultTitle,
} from './StatisticsResultForm.styled';
import css from './StatisticsResultForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPages } from 'redux/planning/planningOperations';
import { useFormik } from 'formik';
import { getPlanBooks } from 'redux/planning/planningSelectors';
// import { getCurrentlyReading } from 'redux/book/bookSelectors';

const getRemainPages = ({ planBooks }) => {
  const diffPages = planBooks
    .map(book => book.pagesTotal - book.pagesFinished)
    .filter(book => book !== 0);
  const unReadPages = diffPages[0];
  return unReadPages;
};

const getLastBook = ({ planBooks }) => {
  const diffPages = planBooks.filter(
    book => book.pagesTotal - book.pagesFinished === 0
  );
  const finishedBook = diffPages[diffPages.length - 1];
  return finishedBook;
};

const getNextBook = ({ planBooks }) => {
  const diffPages = planBooks.filter(
    book => book.pagesTotal - book.pagesFinished !== 0
  );
  const unFinishedBook = diffPages[0];
  return unFinishedBook;
};

export const StatisticsResultForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const planBooks = useSelector(getPlanBooks);
  // const currentBooks = useSelector(getCurrentlyReading);

  const formik = useFormik({
    initialValues: { pages: '' },
    onSubmit: ({ pages }) => {
      const lastsPages = getRemainPages({ planBooks });
      pages = Number(pages);
      if (pages > lastsPages) {
        formik.setErrors({ pages: 'Залишилось ' + lastsPages + ' стор.' });
        return;
      }
      dispatch(
        addPages({
          pages: Number(pages),
        })
      );
    },
  });

  useEffect(() => {
    const finishBook = getLastBook({ planBooks });
    const unFinishBook = getNextBook({
      planBooks,
    });
    if (finishBook && unFinishBook && unFinishBook.pagesFinished === 0) {
      alert(`${finishBook.title} вже прочитали книжку!`);
    }
  }, [planBooks]);

  return (
    <>
      <ResultTitle>Результати</ResultTitle>
      <FormRes onSubmit={formik.handleSubmit}>
        <ResultBox>
          <DataBox>
            <LabelDate>Дата</LabelDate>
            <DatePicker
              className={css.picker}
              selected={startDate}
              disabled
              onChange={date => {
                setStartDate(date);
              }}
              dateFormat="dd.MM.yyyy"
            />
          </DataBox>
          <PageBox>
            <LabelPages>Кількість сторінок</LabelPages>
            <InputPages
              type="text"
              name="pages"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.pages}
            />
            {formik.errors.pages && (
              <ErrorMessage>{formik.errors.pages}</ErrorMessage>
            )}
          </PageBox>
        </ResultBox>
        <ResultBtn type="submit">Додати результат</ResultBtn>
      </FormRes>
    </>
  );
};
