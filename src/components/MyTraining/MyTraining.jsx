import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import {addEndDate, addStartDate } from "redux/planning/planningSlice";



export const MyTraining = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const dispatch = useDispatch()
    
    useEffect(() => {
            const formattedDate = (date) => {
        const incomeDate = new Date(date); 
        const year = incomeDate.getFullYear(); 
        let month = incomeDate.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        const day = incomeDate.getDate(); 
       return year + '-' + month + '-' + day;
         
} 
        dispatch(addStartDate(formattedDate(startDate)))
        dispatch(addEndDate(formattedDate(endDate)))
 }, [dispatch, endDate, startDate])


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