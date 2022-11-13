import { Flex, Button, Heading, VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';

const ThirdSection = () => {
  return (
    <Flex
      h="774px"
      bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
      p="100px"
      justifyContent="space-between"
    >
      <VStack
        alignItems="normal"
        spacing="35px"
        backgroundClip="text"
        textColor="transparent"
        color="#FFFFFF"
      >
        <Heading
          mt="86px"
          w="346px"
          fontWeight="700"
          fontSize="48px"
          lineHeight="60px"
        >
          Metabnb NFTs
        </Heading>

        <Text
          w="415px"
          h="136px"
          fontWeight="400"
          fontSize="18px"
          lineHeight="35px"
        >
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </Text>

        <Button
          borderRadius="8px"
          w="156px"
          h="48px"
          fontSize="16px"
          fontWeight="400"
          lineHeight="19px"
          color="#A02279"
        >
          Learn more
        </Button>
      </VStack>

      <Flex >
        <Image src="assets/png/Home/Frame 59546.png" />
      </Flex>
    </Flex>
  );
};

export default ThirdSection;
