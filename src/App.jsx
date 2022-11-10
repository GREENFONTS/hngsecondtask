import { Flex } from '@chakra-ui/react';
import React from 'react';
import NavComponent from './components/shared/NavComponent';

function App() {
  return (
    <Flex>
      <Flex p="5" w="90%" m="auto">
        <NavComponent />

      </Flex>
    </Flex>
  );
}

export default App;
