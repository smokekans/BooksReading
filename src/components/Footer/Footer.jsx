import { Container, Link, Typography } from '@mui/material';
import { FooterWrapper } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Typography variant="body2" color="#fff" fontFamily="Montserrat">
          {'Copyright © Created by '}
          <Link
            color="#fff"
            href="https://github.com/smokekans/BooksReading"
            target="_blank"
            rel="noreferrer noopener"
          >
            ReacTOR
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </FooterWrapper>
  );
};
