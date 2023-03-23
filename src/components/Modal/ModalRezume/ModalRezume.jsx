import { Form, Rate } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookReview } from 'redux/book/bookOperations';
import Modal from '../Modal/Modal';
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
import { getLanguage } from 'redux/language/languageSelectors';
import { langModals } from 'languages/langModals';

export const ModalRezume = ({ onClose }) => {
  const lang = useSelector(getLanguage);
  const { chooseRating, summary, save, back } = langModals;

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
      <Modal>
        <StyledRatingBox>
          <>
            <Form form={form} layout="vertical" autoComplete="off">
              <StyledRatingText>{chooseRating[lang]}</StyledRatingText>
              <Rate
                style={{ width: '120px', fontSize: '17px' }}
                onChange={value => {
                  setRating(value);
                }}
                value={rating}
              />
              <FormItem name={'resume'} required={true}>
                <StyledRatingLabel>
                  <StyledRatingResumeText>{summary[lang]}</StyledRatingResumeText>
                  <StyledTextArea
                    autoSize={{ minRows: 7 }}
                    value={resume}
                    onChange={e => {
                      setResume(e.currentTarget.value);
                    }}
                    rules={[{ required: true }]}
                    placeholder="Напишіть відгук"
                  />
                </StyledRatingLabel>
              </FormItem>
              <StyledBox>
                <StyledRatingButton onClick={handleCancel}>{back[lang]}</StyledRatingButton>
                <StyledRatingButton
                  type="primary"
                  htmlType="submit"
                  onClick={handleSave}
                  disabled={!resume || !rating}
                >
                  {save[lang]}
                </StyledRatingButton>
              </StyledBox>
            </Form>
          </>
        </StyledRatingBox>
      </Modal>
    </>
  );
};
