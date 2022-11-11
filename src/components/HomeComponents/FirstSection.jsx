import {
  Heading,
  Flex,
  Highlight,
  Text,
  Box,
  Input,
  Button,
  VStack,
  Image,
} from '@chakra-ui/react';
import React from 'react';

const FirstSection = () => {
  return (
    <Flex justifyContent="space-between" gap="4" w="90%" p="5" m="auto">
      <Box w="50%" mt="40px">
        <Heading
          fontSize="49px"
          lineHeight="140%"
          color="#434343"
          fontWeight="400"
          letterSpacing="-0.02em"
        >
          <Highlight
            query={['Place', 'Home', 'Metaverse']}
            styles={{
              color: '#A02279',
              fontWeight: '600',
            }}
          >
            Rent a Place away from Home in the Metaverse
          </Highlight>
        </Heading>

        <Flex mt="35px">
          <Text fontSize="26px" lineHeight="35px">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your <br /> imagination to reality
            at your comfort zone
          </Text>
        </Flex>

        <Flex mt="35px">
          <Input
            placeholder="Search for location"
            w="60%"
            borderRadius="8px 0px 0px 8px"
            border="1px solid #A3A3A3"
            fontSize="12px"
            height="43px"
            fontWeight="400"
            lineHeight="130%"
            color="#B8B8B8"
          />
          <Button
            borderRadius="0px 8px 8px 0px"
            w="35%"
            bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)"
            fontSize="16px"
            lineHeight="19px"
            textAlign="center"
            color="#FFFFFF"
            h="43px"
            _hover={{bg:"linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)"}}
          >
            Search
          </Button>
        </Flex>
      </Box>
      <Flex w="35%" gap="5px" animation="bounceFromBottom 0.5s">
        <VStack mt="70px">
            <Image src="assets/png/image 4.png" h="176px" w="204px"/>

            <Image src="assets/png/image 6.png" h="176px" w="204px"/>
        </VStack>

        <VStack>
            <Image src="assets/png/image 3.png" h="176px" w="204px"/>

            <Image src="assets/png/image 5.png" h="176px" w="204px"/>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default FirstSection;
