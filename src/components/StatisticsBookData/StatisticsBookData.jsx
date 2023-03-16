import React from 'react';
import {
  StatDate,
  StatItem,
  StatList,
  StatPage,
  StatPages,
  StatTime,
  StatTitle,
  StatWrap,
} from './StatisticsBookData.styled';

export const StatisticsBookData = () => {
  return (
    <>
      <StatWrap>
        <StatTitle>СТАТИСТИКА</StatTitle>
        <StatList>
          <StatItem>
            <StatDate>15.03.2023</StatDate>
            <StatTime>08:10:15</StatTime>
            <StatPages>
              50&ensp;<StatPage>стор.</StatPage>
            </StatPages>
          </StatItem>
        </StatList>
      </StatWrap>
    </>
  );
};
