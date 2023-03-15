import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import {addDate} from '../../redux/planning/planningSlice'
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";



export const MyTraining = () => {
    const [startDate, setStartDate] = useState(null);
     const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(addDate(startDate))
    
      
    }, [startDate, endDate, dispatch])
    return (
        <>
            <div>
                <h2>Моє тренування</h2>
            </div>
            
            <DatePicker
                placeholderText="Початок"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat='dd.MM.yyyy'
            />
            <DatePicker
                placeholderText="Завершення"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat='dd.MM.yyyy'
            />
            
            
            <select name="Library_books" id="books">
                <option value=""></option>
            </select>
            <button type="button">Додати</button>
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
                        <td>1984</td>
                        <td>Джордж Оруелл</td>
                        <td>1949</td>
                        <td>328</td>
                    </tr>
                </tbody>
            </table>
            <button type="button">Почати тренування</button>
        </>
    )
}