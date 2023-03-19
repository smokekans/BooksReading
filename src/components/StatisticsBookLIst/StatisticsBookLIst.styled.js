import styled from 'styled-components';

export const ListWrapp = styled.div`
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 928px;
    position: absolute;
    top: 205px;
  }
`;

export const HeaderBox = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    border-top: 1px solid #e0e5eb;
    border-bottom: 1px solid #e0e5eb;
    width: 704px;
    height: 41px;
  }

  @media screen and (min-width: 1280px) {
    width: 928px;
  }
`;

export const Title = styled.span`
  padding: 12px 0;
  margin-right: 194px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #898f9f;
  width: 130px;
  @media screen and (min-width: 768px) {
    margin-right: 152px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 262px;
  }
`;

export const Author = styled.span`
  padding: 12px 0;
  margin-right: 167px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #898f9f;
  @media screen and (min-width: 1280px) {
    margin-right: 185px;
  }
`;

export const Year = styled.span`
  padding: 12px 0;
  margin-right: 69px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #898f9f;
  width: 40px;
  @media screen and (min-width: 1280px) {
    margin-right: 139px;
  }
`;

export const Pages = styled.span`
  padding: 12px 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #898f9f;
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    height: 172px;
    overflow-y: scroll;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(177, 181, 194, 0.25);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b1b5c2;
  }
`;

export const Item = styled.li`
  padding: 20px 0;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 12px 0;
  }
  @media screen and (max-width: 1279px) {
    border-top: 1px solid #e0e5eb;
    border-bottom: 1px solid #e0e5eb;
  }
`;

export const Checked = styled.div`
  margin: 0 19px 0 0;
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #ff6b08;
  border-radius: 1px;
  @media screen and (min-width: 768px) {
    margin: 0 18px 0 7px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 21px 0 0;
  }
`;

export const UnChecked = styled.div`
  margin: 0 19px 0 0;
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #a6abb9;
  border-radius: 1px;
  @media screen and (min-width: 768px) {
    margin: 0 18px 0 7px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 21px 0 0;
  }
`;

export const BookTitle = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
  display: inline-block;
  width: 240px;
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: 768px) {
    margin-right: 45px;
    width: 200px;
  }
  @media screen and (min-width: 1280px) {
    width: 300px;
    margin-right: 115px;
  }
`;

export const BookAuthor = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
  display: inline-block;
  max-width: 145px;
  width: 145px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: 768px) {
    margin-right: 65px;
    width: 160px;
  }
  @media screen and (min-width: 1280px) {
    width: 180px;
    margin-right: 85px;
  }
`;

export const BookYear = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: inline-block;
  color: #242a37;
  max-width: 155px;
  min-width: 145px;
  @media screen and (min-width: 768px) {
    margin-right: 32px;
    max-width: 80px;
    min-width: 80px;
    width: 80px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 105px;
  }
`;

export const BookPages = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
`;

export const AuthorMob = styled.span`
  @media screen and (max-width: 767px) {
    display: inline-block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #898f9f;
    margin: 12px 40px 14px 34px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const YearMob = styled.span`
  @media screen and (max-width: 767px) {
    display: inline-block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #898f9f;
    width: 40px;
    margin: 0 48px 14px 34px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const PagesMob = styled.span`
  @media screen and (max-width: 767px) {
    display: inline-block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #898f9f;
    margin: 0 45px 0 34px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
