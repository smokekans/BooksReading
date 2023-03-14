import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from 'redux/book/bookOperations';
import { getBook } from 'redux/book/bookSelectors';
import { Label, Form, Input } from './LibraryAddBook.styled';
export const LibraryAddBook = () => {
  const dispatch = useDispatch();
  const books = useSelector(getBook);

  const addNewBook = e => {
    e.preventDefault();

    const title = e.target.title.value;
    const author = e.target.author.value;
    const publishYear = Number(e.target.publishYear.value);
    const pagesTotal = Number(e.target.pagesTotal.value);

    if (books.find(book => book.title === title)) {
      alert(`Книга ${title} уже додана в список`);
    } else {
    const newBook = { title, author, publishYear, pagesTotal }
      dispatch(addBook(newBook));
    }
      console.log({ title, author, publishYear, pagesTotal })

    e.target.reset();
    };
    
  return (
    <Form onSubmit={addNewBook}>
      <Label>
        Назва книги
        <Input
          type="text"
          name="title"
          autoComplete="on"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Автор книги
        <Input
          type="text"
          name="author"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Author name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="on"
          required
        />
      </Label>
      <Label>
        Рік випуску
        <Input
          type="number"
          name="publishYear"
            pattern="[0-9]*$"
            title="Publish year may contain only numbers. For example 1998, 2000, 2023"
          autoComplete="on"
          required
        />
      </Label>
      <Label>
        Кількість сторінок
        <Input
          type="number"
          name="pagesTotal"
            pattern="[0-9]*$"
            title="Total pages may contain only numbers. For example 10, 253, 999"
          required
        />
      </Label>
      <button type="submit">Додати</button>
    </Form>
  );
};


