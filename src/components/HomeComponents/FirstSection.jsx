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
    <Box w="1240px" m="43px 100px 0px" h="583px">
      <Flex justifySelf="space-between" gap="80px" w="100%" p="5" m="auto">
        <Box w="646px" h="495px" mt="29.46px">
          <Heading
            fontSize="56px"
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

          <Flex mt="48px">
            <Text fontSize="24px" lineHeight="35px">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your <br /> imagination to reality
              at your comfort zone
            </Text>
          </Flex>

          <Flex mt={{ lg: '48px' }}>
            <Input
              placeholder="Search for location"
              w="390px"
              borderRadius="8px 0px 0px 8px"
              border="1px solid #A3A3A3"
              fontSize="14px"
              height="54px"
              fontWeight="400"
              lineHeight="130%"
              color="#B8B8B8"
            />
            <Button
              borderRadius="0px 8px 8px 0px"
              w="230px"
              bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)"
              fontSize="16px"
              lineHeight="19px"
              textAlign="center"
              color="#FFFFFF"
              h="54px"
              _hover={{
                bg: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)',
              }}
            >
              Search
            </Button>
          </Flex>
        </Box>
        <Flex w="476px" h="595px" gap="5px" animation="bounceFromBottom 0.3s">
          <VStack mt="99px">
            <Image src="assets/png/Home/image 4.png" h="176px" w="234px" />

            <Image src="assets/png/Home/image 6.png" h="176px" w="234px" />
          </VStack>

          <VStack>
            <Image src="assets/png/Home/image 3.png" h="176px" w="234px" />

            <Image src="assets/png/Home/image 5.png" h="176px" w="234px" />
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FirstSection;
