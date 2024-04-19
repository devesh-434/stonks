import React from 'react';
import { Container, Typography } from '@mui/material';
import Carousel from './Carousel';

const useStyles = {
  banner: {
    // backgroundImage: 'url(./pic1.jpg)',  
  },
  bannerContent: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 4,
    justifyContent: 'space-around',
  },
  tagline: {
    display: 'flex',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  carousel: {
    height: '50%',
    display: 'flex',
    alignItems: 'center',
  },
};

function Banner() {
  const classes = useStyles;

  return (
    <div style={classes.banner}>
      <Container sx={classes.bannerContent}>
        <div style={classes.tagline}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              marginBottom: 3,
              fontFamily: 'Montserrat',
            }}
          >
            Stockify
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'darkgrey',
              textTransform: 'capitalize',
              fontFamily: 'Montserrat',
            }}
          >
            Get all the Info regarding your favorite Stocks
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;