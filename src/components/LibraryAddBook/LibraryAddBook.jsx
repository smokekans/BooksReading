import React from 'react';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from 'redux/book/bookOperations';
import { getGoingToRead } from 'redux/book/bookSelectors';
import {
  Label,
  Form,
  Input,
  Button,
  FormAll,
  Container,
} from './LibraryAddBook.styled';
import { getLanguage } from 'redux/language/languageSelectors';
import { langOptionsLibraryAddBook } from 'languages/langOptionsLibraryAddBook';

export const LibraryAddBook = () => {
  const dispatch = useDispatch();
  const books = useSelector(getGoingToRead);
  const lang = useSelector(getLanguage);
  const { titlel, authorl, publishYearl, pagesTotall, addl, bookl } = langOptionsLibraryAddBook;

  const addNewBook = e => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const publishYear = Number(e.target.publishYear.value);
    const pagesTotal = Number(e.target.pagesTotal.value);

    if (books?.find(book => book.title === title)) {
     toast.warn(`${bookl} "${title}" уже є в списку`);
    } else {
      const goingToRead = { title, author, publishYear, pagesTotal };
      dispatch(addBook(goingToRead));
     toast.success(`${bookl} "${title}" успішно додана в вашу бібліотеку`)
    }
    e.target.reset();
  };

  return (
    <Container><ToastContainer autoClose={2000} />
      <FormAll onSubmit={addNewBook}>
        <Form>
          <Label className="title">
           {titlel[lang]}
            <Input
              type="text"
              name="title"
              minlength="1" maxlength="254"
               title="Title may contain letters, numbers, apostrophe, dash and spaces. For example: The Book of Five Rings"
              placeholder="..."
              required
            />
          </Label>
          <div className="input-second">
            <Label>
              {authorl[lang]}
              <Input
                className="author"
                type="text"
                name="author"
                minlength="1" maxlength="254"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Author name may contain only letters, apostrophe, dash and spaces. For example: Miyamoto Musashi"
                placeholder="..."
                autoComplete="on"
                required
              />
            </Label>
            <Label>
              {publishYearl[lang]}
              <Input
                className="small-input"
                type="number"
                name="publishYear"
                min="1000"
                max="2023"
                pattern="[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}"
                title="Publish year may contain only numbers. For example 1998, 2000, 2023"
                placeholder="..."
                autoComplete="on"
                required
              />
            </Label>
            <Label>
              {pagesTotall[lang]}
              <Input
                className="small-input"
                type="number"
                name="pagesTotal"
                min="1"
                max="5000"
                pattern="[0-9]*$"
                title="Total pages may contain only numbers from 1 to 5000. For example 10, 253, 999"
                placeholder="..."
                required
              />
            </Label>
          </div>
        </Form>
        <Button type="submit">{addl[lang]}</Button>
      </FormAll>
    </Container>
  );
};
