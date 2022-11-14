import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const FirstDivider = () => {
  return (
    <Flex
      bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
      justifyContent="center"
      flexDirection="row"
      alignItems="center"
      h="55px"
      p="10px 100px"
      gap={{ lg: '187px', xl: '264px' }}
    >
      <Image
        src="assets/svg/firstFooterIcon1.svg"
        w={{ lg: '170px', xl: '222px' }}
        h="50px"
      />

      <Image
        src="assets/svg/firstFooterIcon2.svg"
        w={{ lg: '160px', xl: '214,41px' }}
        h="37.66px"
      />

      <Image
        src="assets/svg/firstFooterIcon3.svg"
        w={{ lg: '150px', xl: '198px' }}
        h="40.76px"
      />
    </Flex>
  );
};

export default FirstDivider;
