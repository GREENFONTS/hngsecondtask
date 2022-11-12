import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavComponent from './components/shared/NavComponent';
import "./App.css"

function App() {
  return (
      <Box>
        <NavComponent />
          <Outlet />
      </Box>
  );
}

export default App;
