import React, { useState } from 'react';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTrainingConfig } from 'redux/planning/planningOperations';
import {
  addEndDate,
  addStartDate,
  addToBooks,
} from 'redux/planning/planningSlice';

export const MyTraining = () => {
  const state = useSelector(state => state.book.book.goingToRead);
  const stateBody = useSelector(state => state.planning);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const formattedDate = date => {
      const incomeDate = new Date(date);
      const year = incomeDate.getFullYear();
      let month = incomeDate.getMonth() + 1;
      if (month < 10) {
        month = '0' + month;
      }
      const day = incomeDate.getDate();
      return year + '-' + month + '-' + day;
    };

    dispatch(addStartDate(formattedDate(startDate)));
    dispatch(addEndDate(formattedDate(endDate)));
  }, [dispatch, endDate, startDate]);

  const handleReadId = e => {
    setId(e.target.value);
  };
  const handleAddBtn = e => {
    dispatch(addToBooks(id));
  };
  const handleBeginTrainingBtn = () => {
    dispatch(addTrainingConfig(stateBody));
  };
console.log(stateBody);
  return (
    <>
      <div>
        <h2>Моє тренування</h2>
      </div>

      <DatePicker
        placeholderText="Початок"
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd.MM.yyyy"
      />
      <DatePicker
        placeholderText="Завершення"
        selected={endDate}
        onChange={date => setEndDate(date)}
        dateFormat="dd.MM.yyyy"
      />

      <select onChange={handleReadId}>
        <option value="default">...</option>
        {state.map(({ _id, title }) => {
          return (
            <option key={_id} value={_id}>
              {title}
            </option>
          );
        })}
      </select>
      <button onClick={handleAddBtn} type="button">
        Додати
      </button>
      <table>
        <thead>
          <tr>
            <th>Назва книги</th>
            <th>Автор</th>
            <th>Рік</th>
            <th>Стор.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>...</td>
          </tr>
          
        </tbody>
      </table>
      <button onClick={handleBeginTrainingBtn} type="button">
        Почати тренування
      </button>
    </>
  );
};
