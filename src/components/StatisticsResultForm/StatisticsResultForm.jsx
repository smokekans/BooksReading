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

export const StatisticsResultForm = () => {
  const [resultDate, setResultDate] = useState(new Date());

  return (
    <>
      <ResultTitle>Результати</ResultTitle>
      <FormRes>
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
            <InputPages type="text" name="pages" autoComplete="off" />
          </PageBox>
        </ResultBox>
        <ResultBtn type="submit">Додати результат</ResultBtn>
      </FormRes>
    </>
  );
};
