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
import { getLanguage } from 'redux/language/languageSelectors';
import { langStatisticsBookData } from 'languages/langStatisticsBookData';

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
  const lang = useSelector(getLanguage);
  const { results, dateLang, numberOfPages, addResult, only, left } =
    langStatisticsBookData;

  const formik = useFormik({
    initialValues: { pages: '' },
    onSubmit: ({ pages }) => {
      const lastsPages = getRemainPages({ planBooks });
      pages = Number(pages);
      if (pages > lastsPages) {
        formik.resetForm();
        formik.setErrors({
          pages: `${only[lang]} ` + lastsPages + ` ${left[lang]}`,
        });
        return;
      } else if (pages === lastsPages) {
        setIsModalOpen(true);
      }
      dispatch(
        addPages({
          pages: Number(pages),
        })
      );
      formik.resetForm();
    },
  });

  const closeModalFinished = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ResultTitle>{results[lang]}</ResultTitle>
      <FormRes onSubmit={formik.handleSubmit}>
        <ResultBox>
          <DataBox>
            <LabelDate>{dateLang[lang]}</LabelDate>
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
            <LabelPages>{numberOfPages[lang]}</LabelPages>
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
        <ResultBtn type="submit">{addResult[lang]}</ResultBtn>
      </FormRes>
      {isModalOpen && <ModalFinishedBooks onClose={closeModalFinished} />}
    </>
  );
};
