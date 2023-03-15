import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StatisticsResultForm = () => {
  const [resultDate, setResultDate] = useState(new Date());

  return (
    <>
      <form>
        <div>
          <div>
            <p>Дата</p>
            <DatePicker
              selected={resultDate}
              onChange={date => {
                setResultDate(date);
              }}
              dateFormat="dd.MM.yyyy"
            />
          </div>
          <div>
            <p>Кількість сторінок</p>
            <input type="text" name="pages" autoComplete="off" />
          </div>
        </div>
        <button type="submit">Додати результат</button>
      </form>
    </>
  );
};
