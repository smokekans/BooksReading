import { Form, Rate } from 'antd';
import React from 'react';
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
  const handleCancel = () => {
    onClose();
  };
  return (
    <>
      <StyledRatingBox>
        <>
          <Form form={form} layout="vertical" autoComplete="off">
            <StyledRatingText>Обрати рейтинг книги</StyledRatingText>
            <Rate style={{ width: '120px', fontSize: '17px' }} />
            <FormItem name={'resume'}>
              <StyledRatingLabel>
                <StyledRatingResumeText>Резюме</StyledRatingResumeText>
                <StyledTextArea autoSize={{ minRows: 7 }} />
              </StyledRatingLabel>
            </FormItem>

            <StyledBox>
              <StyledRatingButton onClick={handleCancel}>Назад</StyledRatingButton>
              <StyledRatingButton type="primary" htmlType="submit">
                Зберегти
              </StyledRatingButton>
            </StyledBox>
          </Form>
        </>
      </StyledRatingBox>
    </>
  );
};
