import { Box, Container, Link, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 0,
        px: 0,
        m: '0',
        mt: 'auto',
        textAlign: 'center',
        backgroundColor: '#FF6B08',
        boxShadow: '0px -2px 3px rgba(9, 30, 63, 0.1)',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
      }}
    >
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
    </Box>
  );
};
