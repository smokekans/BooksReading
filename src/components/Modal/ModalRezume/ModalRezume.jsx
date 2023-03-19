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
import { useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/languageSelectors';
import { langModals } from 'languages/langModals';

export const ModalRezume = ({ onClose }) => {
  const lang = useSelector(getLanguage);
  const { chooseRating, summary, save, back } = langModals;

  const [form] = Form.useForm();
  const handleCancel = () => {
    onClose();
  };
  return (
    <>
      <StyledRatingBox>
        <>
          <Form form={form} layout="vertical" autoComplete="off">
            <StyledRatingText>{chooseRating[lang]}</StyledRatingText>
            <Rate style={{ width: '120px', fontSize: '17px' }} />
            <FormItem name={'resume'}>
              <StyledRatingLabel>
                <StyledRatingResumeText>{summary[lang]}</StyledRatingResumeText>
                <StyledTextArea autoSize={{ minRows: 7 }} />
              </StyledRatingLabel>
            </FormItem>

            <StyledBox>
              <StyledRatingButton onClick={handleCancel}>
                {back[lang]}
              </StyledRatingButton>
              <StyledRatingButton type="primary" htmlType="submit">
                {save[lang]}
              </StyledRatingButton>
            </StyledBox>
          </Form>
        </>
      </StyledRatingBox>
    </>
  );
};
