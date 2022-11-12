import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const FirstDivider = () => {
  return (
    <Flex
      bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
      justifyContent="center"
      flexDirection="row"
      alignItems="center"
      h="70px"
      p="10px 100px"
      gap="264px"
    >
      <Image src="assets/svg/firstFooterIcon1.svg" w="222px" h="50px"/>

      <Image src="assets/svg/firstFooterIcon2.svg" w="222px" h="50px"/>

      <Image src="assets/svg/firstFooterIcon3.svg" w="222px" h="50px"/>
    </Flex>
  );
};

export default FirstDivider;
