import { StatisticsBookData } from 'components/StatisticsBookData/StatisticsBookData';
import { StatisticsResultForm } from 'components/StatisticsResultForm/StatisticsResultForm';
import React from 'react';

export const StatisticsBookPages = () => {
  return (
    <>
      <StatisticsResultForm />
      <StatisticsBookData />
    </>
  );
};
