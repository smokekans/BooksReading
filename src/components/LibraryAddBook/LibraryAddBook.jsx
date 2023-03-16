// import { LibraryTable } from 'components/LibraryTable/LibraryTable';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from 'redux/book/bookOperations';
import { getGoingToRead } from 'redux/book/bookSelectors';
import {
  Label,
  Form,
  Input,
  Button,
  // ButtonSvgBack,
  FormAll,
} from './LibraryAddBook.styled';
// import { ReactComponent as Back } from './svg/back.svg';

export const LibraryAddBook = () => {
  const dispatch = useDispatch();
  const books = useSelector(getGoingToRead);

  const addNewBook = e => {
    e.preventDefault();

    const title = e.target.title.value;
    const author = e.target.author.value;
    const publishYear = Number(e.target.publishYear.value);
    const pagesTotal = Number(e.target.pagesTotal.value);

    if (books.find(book => book.title === title)) {
      alert(`Книга ${title} уже додана в список`);
    } else {
      const goingToRead = { title, author, publishYear, pagesTotal };
      dispatch(addBook(goingToRead));
    }
    // console.log({ title, author, publishYear, pagesTotal });
    e.target.reset();
  };

  return (
    <>
      {/* <ButtonSvgBack type='button'><Back /></ButtonSvgBack> */}
      <FormAll onSubmit={addNewBook}>
        <Form>
          <Label className="title">
            Назва книги
            <Input
              type="text"
              name="title"
              placeholder="..."
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <div className="input-second">
            <Label>
              Автор книги
              <Input
                className="author"
                type="text"
                name="author"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Author name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="..."
                autoComplete="on"
                required
              />
            </Label>
            <Label>
              Рік випуску
              <Input
                className="small-input"
                type="number"
                name="publishYear"
                pattern="[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}"
                title="Publish year may contain only numbers. For example 1998, 2000, 2023"
                placeholder="..."
                autoComplete="on"
                required
              />
            </Label>
            <Label>
              Кількість сторінок
              <Input
                className="small-input"
                type="number"
                name="pagesTotal"
                min="0"
                pattern="[0-9]*$"
                title="Total pages may contain only numbers. For example 10, 253, 999"
                placeholder="..."
                required
              />
            </Label>
          </div>
        </Form>
        <Button type="submit">Додати</Button>
      </FormAll>
    </>
  );
};
