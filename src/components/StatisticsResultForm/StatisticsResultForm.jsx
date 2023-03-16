import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  DataBox,
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
// import { useDispatch } from 'react-redux';
// import { addPages } from 'redux/planning/planningOperations';

export const StatisticsResultForm = () => {
  const [resultDate, setResultDate] = useState(new Date());
  const [pages, setPages] = useState('');
  // const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'pages':
        setPages(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    // const page = {
    //   pages: Number(pages),
    // };
    // dispatch(addPages(page));
    setPages('');
  };

  return (
    <>
      <ResultTitle>Результати</ResultTitle>
      <FormRes onSubmit={handleSubmitForm}>
        <ResultBox>
          <DataBox>
            <LabelDate>Дата</LabelDate>
            <DatePicker
              className={css.picker}
              selected={resultDate}
              disabled
              onChange={date => {
                setResultDate(date);
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
              onChange={handleChange}
              value={pages}
            />
          </PageBox>
        </ResultBox>
        <ResultBtn type="submit">Додати результат</ResultBtn>
      </FormRes>
    </>
  );
};
