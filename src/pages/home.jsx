import { Box } from '@chakra-ui/react';
import React from 'react'
import FirstDivider from '../components/HomeComponents/FirstDivider';
import FirstSection from '../components/HomeComponents/FirstSection';

const HomeComponent = () => {
  return (
    <Box mt="70px">
        <FirstSection />
        <FirstDivider />
    </Box>
  )
}

export default HomeComponent;