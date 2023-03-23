import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLanguage } from '../../redux/language/languageSelectors';
import { changeLang } from '../../redux/language/languageSlice';
import { Select } from './SwitchLanguage.styled';

export const SwitchLanguage = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);

  const switchLang = e => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <Select onChange={switchLang} name="language" value={language}>
      <option value={'en'}>ENG</option>
      <option value={'ua'}>УКР</option>
    </Select>
  );
};
