import { Flex, Button, Heading, VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';

const ThirdSection = () => {
  return (
    <Flex
      h={{ md: '450px', lg: '600px', xl: '774px' }}
      bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
      p={{ md: '60px', lg: '72px', xl: '100px' }}
      justifyContent="space-between"
    >
      <VStack
        alignItems="normal"
        spacing={{md:"25px", lg:"35px"}}
        backgroundClip="text"
        textColor="transparent"
        color="#FFFFFF"
      >
        <Heading
          mt={{ md: '50px', lg: '62px', xl: '86px' }}
          w={{ md: '250px', lg: '300px', xl: '346px' }}
          fontWeight="700"
          fontSize={{ md: '30px', lg: '40px', xl: '48px' }}
          lineHeight="60px"
        >
          Metabnb NFTs
        </Heading>

        <Text
          w={{ md: '300px', lg: '350px', xl: '415px' }}
          h="136px"
          fontWeight="400"
          fontSize={{ md: '12px', lg: '15px', xl: '18px' }}
          lineHeight={{ md: '25px', lg: '35px' }}
        >
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </Text>

        <Button
          borderRadius="8px"
          w={{md:"105px", lg: '135px', xl: '156px' }}
          h={{md:"35px",lg:"48px"}}
          fontSize={{md:"12px", lg: '14px', xl: '16px' }}
          fontWeight="400"
          lineHeight="19px"
          color="#A02279"
        >
          Learn more
        </Button>
      </VStack>

      <Flex>
        <Image src="assets/png/Home/Frame 59546.png" />
      </Flex>
    </Flex>
  );
};

export default ThirdSection;
