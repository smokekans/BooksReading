import { Form, Rate } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export const ModalRezume = ({ onClose }) => {
  const [form] = Form.useForm();

  const [rating, setRating] = useState(0);
  const [resume, setResume] = useState('');
  const id = useSelector(state => state.book.book.idR);

  const dispatch = useDispatch();

  const handleCancel = () => {
    onClose();
  };

  const handleSave = () => {
    dispatch(
      addBookReview({
        bookId: id,
        review: {
          rating: rating,
          feedback: resume,
        },
      })
    );
    onClose();
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
