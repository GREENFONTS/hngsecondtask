import { Box } from '@chakra-ui/react';
import React from 'react'
import FirstDivider from '../components/HomeComponents/FirstDivider';
import FirstSection from '../components/HomeComponents/FirstSection';
import SecondSection from '../components/HomeComponents/SecondSection';

const HomeComponent = () => {
  return (
    <Box mt="70px">
        <FirstSection />
        <FirstDivider />
        <SecondSection />
    </Box>
  )
}

export default HomeComponent;