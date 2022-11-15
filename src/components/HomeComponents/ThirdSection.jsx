import { Flex, Button, Heading, VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';

const ThirdSection = () => {
  return (
    <Flex
      bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
      display={{base:"block", sm:"flex"}}
      p={{base:"40px",sm:"55px", md: '60px', lg: '72px', xl: '100px' }}
      justifyContent="space-between"
    >
      <VStack
        alignItems="normal"
        spacing={{base:"20px",md:"25px", lg:"35px"}}
        backgroundClip="text"
        textColor="transparent"
        color="#FFFFFF"
      >
        <Heading
          mt={{base:"20px",sm: '50px', lg: '62px', xl: '86px' }}
          w={{sm:"200px", md: '250px', lg: '300px', xl: '346px' }}
          fontWeight="700"
          fontSize={{base:"25px", md: '30px', lg: '40px', xl: '48px' }}
          lineHeight={{base:"40px",md:"60px"}}
        >
          Metabnb NFTs
        </Heading>

        <Text
          w={{sm:"250px", md: '300px', lg: '350px', xl: '415px' }}
          fontWeight="400"
          fontSize={{ base: '12px', lg: '15px', xl: '18px' }}
          lineHeight={{base:"20px", md: '25px', lg: '35px' }}
        >
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </Text>

        <Button
          borderRadius="8px"
          w={{base:"120px",sm:"90px",md:"105px", lg: '135px', xl: '156px' }}
          h={{base:"30px",md:"35px",lg:"48px"}}
          fontSize={{base:"12px", lg: '14px', xl: '16px' }}
          fontWeight="400"
          lineHeight="19px"
          color="#A02279"
        >
          Learn more
        </Button>
      </VStack>

      <Flex mt={{base:"20px", sm:"0px"}}>
        <Image src="assets/png/Home/Frame 59546.png" />
      </Flex>
    </Flex>
  );
};

export default ThirdSection;
