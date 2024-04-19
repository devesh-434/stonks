// import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@mui/material';
// import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const StyledTitle = styled(Typography)(({ theme }) => ({
//   flex: 1,
//   color: "gold",
//   fontFamily: "Montserrat",
//   fontWeight: "bold",
//   cursor: "pointer",
// }));

// const StyledSelect = styled(Select)(({ theme }) => ({
//   backgroundColor: theme.palette.common.white, // Set a light background color for the Select component
//   color: theme.palette.text.primary, // Set the text color for the Select component
//   '& .MuiOutlinedInput-notchedOutline': {
//     borderColor: theme.palette.text.primary, // Set the border color of the Select component
//   },
// }));

// const Header = () => {
//   const navigate = useNavigate();
//   const [currency, setCurrency] = useState('USD');

//   const handleTitleClick = () => {
//     navigate('/');
//   };

//   const handleCurrencyChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   const darkTheme = createTheme({
//     palette: {
//       primary: {
//         main: "#000", // Set the primary color to black
//       },
//       type: "dark", // Set the theme mode to dark
//     },
//   });

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <AppBar position='static' style={{ backgroundColor: '#000' }}>
//         <Container>
//           <Toolbar>
//             <StyledTitle onClick={handleTitleClick}>Stockify</StyledTitle>
//             <StyledSelect
//               variant='outlined'
//               value={currency}
//               onChange={handleCurrencyChange}
//               style={{ width: 100, height: 40, marginLeft: 15 }}
//             >
//               <MenuItem value={'USD'}>USD</MenuItem>
//               <MenuItem value={'INR'}>INR</MenuItem>
//             </StyledSelect>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </ThemeProvider>
//   );
// };

// export default Header;

// import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@mui/material'
// import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const StyledTitle = styled(Typography)(({ theme }) => ({
//  flex: 1,
//  color: "gold",
//  fontFamily: "Montserrat",
//  fontWeight: "bold",
//  cursor: "pointer",
// }));

// const Header = () => {
//  const navigate = useNavigate();

//  const handleTitleClick = () => {
//    navigate('/');
//  };

//  const darkTheme = createTheme({
//    palette: {
//      primary: {
//        main: "#fff",
//      },
//      type: "dark",
//    },
//  });

//  return (
//    <ThemeProvider theme={darkTheme}>
//      <AppBar color='transparent' position='static'>
//        <Container>
//          <Toolbar>
//            <StyledTitle onClick={handleTitleClick} variant='h6'>Stockify</StyledTitle>
//            <Select
//              variant='outlined'
//              style={{ width: 100, height: 40, marginRight: 15 }}
//            >
//              <MenuItem value={'USD'}>USD</MenuItem>
//              <MenuItem value={'INR'}>INR</MenuItem>
//            </Select>
//          </Toolbar>
//        </Container>
//      </AppBar>
//    </ThemeProvider>
//  )
// }

// export default Header

import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../StockContext";


const useStyles = {
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
});

function Header() {
  const { currency, setCurrency } = CryptoState();
  const navigate = useNavigate();
  const classes = useStyles;

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate(`/`)}
              variant="h6"
              sx={classes.title}
            >
              Stockify
            </Typography>
            <Select
              value={currency}
              sx={{ width: 100, height: 40, marginLeft: 1.5 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;