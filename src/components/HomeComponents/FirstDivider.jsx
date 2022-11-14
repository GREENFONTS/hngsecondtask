import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const FirstDivider = () => {
  return (
    <Flex
      bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
      justifyContent="center"
      flexDirection="row"
      alignItems="center"
      h={{ md: '40px', lg: '55px' }}
      p={{ md: '10px 60px', lg: '10px 100px' }}
      gap={{ md: '140px', lg: '187px', xl: '264px' }}
    >
      <Image
        src="assets/svg/firstFooterIcon1.svg"
        w={{ md: '120px', lg: '170px', xl: '222px' }}
        h={{ md: '30px', lg: '50px' }}
      />

      <Image
        src="assets/svg/firstFooterIcon2.svg"
        w={{ md: '115px', lg: '160px', xl: '214.41px' }}
        h={{ md: '25px', lg: '37.66px' }}
      />

      <Image
        src="assets/svg/firstFooterIcon3.svg"
        w={{ md: '110px', lg: '150px', xl: '198px' }}
        h={{ md: '25px', lg: '40.67px' }}
      />
    </Flex>
  );
};

export default FirstDivider;
