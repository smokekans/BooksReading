import { StatisticsBookData } from 'components/StatisticsBookData/StatisticsBookData';
import { StatisticsResultForm } from 'components/StatisticsResultForm/StatisticsResultForm';
import React from 'react';
import { ResultWrapp } from './StatisticsBookPages.styled';

export const StatisticsBookPages = () => {
  return (
    <>
      <ResultWrapp>
        <StatisticsResultForm />
        <StatisticsBookData />
      </ResultWrapp>
    </>
  );
};
