import { Form, Rate } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookReview } from 'redux/book/bookOperations';
import {
  FormItem,
  StyledBox,
  StyledRatingBox,
  StyledRatingButton,
  StyledRatingLabel,
  StyledRatingResumeText,
  StyledRatingText,
  StyledTextArea,
} from './ModalRezume.styled';

export const ModalRezume = ({ onClose, bookId }) => {
  const [form] = Form.useForm();

  const [rating, setRating] = useState(null);
  const [resume, setResume] = useState('');

  const dispatch = useDispatch();

  const handleCancel = () => {
    onClose();
  };
  console.log(resume);
  console.log(rating);
  const handleSave = () => {
    console.log(bookId);

    dispatch(
      addBookReview({
        // bookId: bookId,
        review: {
          rating: rating,
          feedback: resume,
        },
        // bookId: '64130feb3551fd60da512f4c',
        // review: {
        //   rating: 5,
        //   feedback: 'Really good book',
        // },
      })
    );
    setRating(null);
    setResume('');
  };
  return (
    <>
      <StyledRatingBox>
        <>
          <Form form={form} layout="vertical" autoComplete="off">
            <StyledRatingText>Обрати рейтинг книги</StyledRatingText>
            <Rate
              style={{ width: '120px', fontSize: '17px' }}
              onChange={value => {
                setRating(value);
              }}
              value={+rating}
            />{' '}
            <FormItem name={'resume'}>
              <StyledRatingLabel>
                <StyledRatingResumeText>Резюме</StyledRatingResumeText>
                <StyledTextArea
                  autoSize={{ minRows: 7 }}
                  value={resume}
                  onChange={e => {
                    setResume(e.currentTarget.value);
                  }}
                />
              </StyledRatingLabel>
            </FormItem>
            <StyledBox>
              <StyledRatingButton onClick={handleCancel}>Назад</StyledRatingButton>
              <StyledRatingButton type="primary" htmlType="submit" onClick={handleSave}>
                Зберегти
              </StyledRatingButton>
            </StyledBox>
          </Form>
        </>
      </StyledRatingBox>
    </>
  );
};
