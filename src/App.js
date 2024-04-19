import './App.css';
import HomePage from './Pages/HomePage';
import StockPage from './Pages/StockPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { styled } from '@mui/material/styles';

const StyledApp = styled('div')(({ theme }) => ({
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
}));

function App() {
  return (
    <Router>
      <StyledApp>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stocks/:id" element={<StockPage />} />
        </Routes>
      </StyledApp>
    </Router>
  );
}

export default App;