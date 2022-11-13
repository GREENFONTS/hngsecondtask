import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const FirstDivider = () => {
  return (
    <Flex
      bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
      justifyContent="center"
      flexDirection="row"
      alignItems="flex-start"
      h="70px"
      p="10px 100px"
      gap="264px"
    >
      <Image src="assets/svg/firstFooterIcon1.svg" w="222px" h="50px"/>

      <Image src="assets/svg/firstFooterIcon2.svg" w="214.41px" h="37.66px"/>

      <Image src="assets/svg/firstFooterIcon3.svg" w="198px" h="40.76px"/>
    </Flex>
  );
};

export default FirstDivider;
