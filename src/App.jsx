import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavComponent from './components/shared/NavComponent';
import './App.css';
import Footer from './components/shared/Footer';

function App() {
  return (
    <Box>
      <NavComponent />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
