export const MyTraining = () => {
    return (
        <>
            <div>
                <h2>Моє тренування</h2>
            </div>
            <input type="" />
            <input type="text" />
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