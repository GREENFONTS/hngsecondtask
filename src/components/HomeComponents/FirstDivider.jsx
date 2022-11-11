import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const FirstDivider = () => {
  return (
    <Flex
      bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
      justifyContent="space-around"
      alignItems="center"
      mt="40px"
      h="60px"
      p="10px 100px"
    >
      <Image src="assets/svg/firstFooterIcon1.svg" />

      <Image src="assets/svg/firstFooterIcon2.svg" />

      <Image src="assets/svg/firstFooterIcon3.svg" />
    </Flex>
  );
};

export default FirstDivider;
