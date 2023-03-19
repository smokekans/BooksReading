import React from 'react';
import { useSelector } from 'react-redux';
import { getStats } from 'redux/planning/planningSelectors';
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
import { getLanguage } from 'redux/language/languageSelectors';
import { langStatisticsBookData } from 'languages/langStatisticsBookData';

export const StatisticsBookData = () => {
  const stats = useSelector(getStats);
  const lang = useSelector(getLanguage);
  const { statist, pages } = langStatisticsBookData;

  const formatTime = time => {
    return time < 10 ? '0' + time : time;
  };

  return (
    <>
      <StatWrap>
        <StatTitle>{statist[lang]}</StatTitle>
        <StatList>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatDate>
                {formatTime(JSON.stringify(new Date(stat.time).getDate()))}.
                {formatTime(JSON.stringify(new Date(stat.time).getMonth() + 1))}
                .{JSON.stringify(new Date(stat.time).getFullYear())}
              </StatDate>
              <StatTime>
                {formatTime(JSON.stringify(new Date(stat.time).getHours()))}:
                {formatTime(JSON.stringify(new Date(stat.time).getMinutes()))}
                :00
              </StatTime>
              <StatPages>
                {stat.pagesCount}&ensp;<StatPage>{pages[lang]}</StatPage>
              </StatPages>
            </StatItem>
          ))}
        </StatList>
      </StatWrap>
    </>
  );
};
