import {  Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavComponent from './components/shared/NavComponent';
import './App.css';
import Footer from './components/shared/Footer';

function App() {
  return (
    <Flex w="100%" flexDirection="column">
        <NavComponent />
        <Outlet />
        <Footer />
    </Flex>
  );
}

export default App;
