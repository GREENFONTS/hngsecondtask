import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const FirstDivider = () => {
  return (
    <Flex
      bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
      justifyContent="center"
      flexDirection="row"
      alignItems="center"
      h={{ base: '35px', md: '40px', lg: '55px' }}
      p={{
        base: '10px 30px',
        sm: '10px 50px',
        md: '10px 60px',
        lg: '10px 100px',
      }}
      gap={{ base: '50px', sm: '70px', md: '150px', lg: '187px', xl: '264px' }}
    >
      <Image
        src="assets/svg/firstFooterIcon1.svg"
        w={{ base: '80px', sm: '120px', lg: '170px', xl: '222px' }}
        h={{ base: '30px', sm: '27px', md: '30px', lg: '50px' }}
      />

      <Image
        src="assets/svg/firstFooterIcon2.svg"
        w={{ base: '80px', sm: '115px', lg: '160px', xl: '214.41px' }}
        h={{ base: '30px', sm: '22px', md: '25px', lg: '37.66px' }}
      />

      <Image
        src="assets/svg/firstFooterIcon3.svg"
        w={{ base: '80px', sm: '110px', lg: '150px', xl: '198px' }}
        h={{ base: '30px', sm: '22px', md: '25px', lg: '40.67px' }}
      />
    </Flex>
  );
};

export default FirstDivider;
