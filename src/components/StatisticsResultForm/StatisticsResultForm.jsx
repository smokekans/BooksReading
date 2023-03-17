import React, { useState } from 'react';
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
import { ModalFinishedBooks } from 'components/Modal/ModalFinishedBook/ModalFinishedBook';

const getRemainPages = ({ planBooks }) => {
  const diffPages = planBooks
    .map(book => book.pagesTotal - book.pagesFinished)
    .filter(book => book !== 0);
  const unReadPages = diffPages[0];
  return unReadPages;
};

export const StatisticsResultForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const planBooks = useSelector(getPlanBooks);

  const formik = useFormik({
    initialValues: { pages: '' },
    onSubmit: ({ pages }) => {
      const lastsPages = getRemainPages({ planBooks });
      pages = Number(pages);
      if (pages > lastsPages) {
        formik.setErrors({ pages: 'Залишилось ' + lastsPages + ' стор.' });
        return;
      } else if (pages === lastsPages) {
        setIsModalOpen(true);
      }
      dispatch(
        addPages({
          pages: Number(pages),
        })
      );
    },
  });

  const closeModalFinished = () => {
    setIsModalOpen(false);
  };

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
      {isModalOpen && <ModalFinishedBooks onClose={closeModalFinished} />}
    </>
  );
};
