import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import FirstDivider from '../components/HomeComponents/FirstDivider';
import FirstSection from '../components/HomeComponents/FirstSection';
import SecondSection from '../components/HomeComponents/SecondSection';
import ThirdSection from '../components/HomeComponents/ThirdSection';

const HomeComponent = () => {
  return (
    <Flex mt={{md: "60px",lg:"70px"}} w="100%">
      <Box w="100%">
        <FirstSection />
        <FirstDivider />
        <SecondSection />
        <ThirdSection />
      </Box>
    </Flex>
  );
};

export default HomeComponent;
