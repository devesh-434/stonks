// import { makeStyles } from '@mui/material'
// import axios from "axios"
// import React, { useEffect, useState } from 'react'
// import { TrendingCoins } from '../../config/api'
// // import {CryptoState} from '../../StockContext'
// const useStyles = makeStyles((theme)=>({
//     carousel: {
//       height: "50%",
//       display: "flex",
//       alignItems: "center",
//     },
//     carouselItem: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       cursor: "pointer",
//       textTransform: "uppercase",
//       color: "white",
//     },
// }))

// const Carousel = () => {
//     const [trending, setTrending] = useState([]);
//     const classes = useStyles();

//     // const {countries} = CryptoState();

//     const fetchTrendingCoins = async () =>{
//         const {data} = await axios.get(TrendingCoins());
//         setTrending(data);
//     };

//     console.log(trending);

//     useEffect(()=>{
//         fetchTrendingCoins();
//     },[]);

//   return (
//     <div className={classes.carousel}>
//         Carousel
//     </div>
//   )
// }

// export default Carousel

import { useState, useEffect } from 'react';
import axios from 'axios';
import { TrendingCoins } from '../../config/api';
// import {CryptoState} from '../../StockContext';

const useStyles = {
  carousel: {
    height: '50%',
    display: 'flex',
    alignItems: 'center',
  },
  carouselItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    textTransform: 'uppercase',
    color: 'white',
  },
};

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const classes = useStyles;
  // const {countries} = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins());
    setTrending(data);
  };

  console.log(trending);

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return <div style={classes.carousel}>Carousel</div>;
};

export default Carousel;