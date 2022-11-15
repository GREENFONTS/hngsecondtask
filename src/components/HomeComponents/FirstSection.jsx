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
    <Box
      w={{ base: '90%', lg: '86.1%' }}
      m={{ base: '10px auto 30px', sm: '10px auto 40px', lg: '43px auto 40px' }}
    >
      <Flex
        justifySelf="space-between"
        display={{ base: 'block', sm: 'flex' }}
        gap={{ sm: '8%' }}
        w="100%"
        m="auto"
      >
        <Box
          w={{ base: '100%', sm: '52%' }}
          mt={{ sm: '17px', md: '25px', lg: '21.3px', xl: '29.46px' }}
        >
          <Heading
            fontSize={{
              base: '30px',
              sm: '25px',
              md: '30px',
              lg: '38px',
              xl: '48px',
              '2xl': '57px',
            }}
            lineHeight={{
              base: '130%',
              sm: '110%',
              md: '120%',
              xl: '140%',
              '2xl': '130%',
            }}
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

          <Flex
            mt={{
              base: '20px',
              sm: '25px',
              md: '27px',
              lg: '34.1px',
              xl: '48px',
              '2xl': '40px',
            }}
          >
            <Text
              fontSize={{
                base: '15px',
                sm: '11px',
                md: '12.7px',
                lg: '18px',
                xl: '20px',
                '2xl': '26px',
              }}
              lineHeight={{ base: '19px', d: '25px', lg: '35px' }}
            >
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your <br /> imagination to reality
              at your comfort zone
            </Text>
          </Flex>

          <Flex mt={{ base: '25px', md: '30px', lg: '34.1px', xl: '48px' }}>
            <Input
              placeholder="Search for location"
              w={{ base: '60%' }}
              borderRadius="8px 0px 0px 8px"
              border="1px solid #A3A3A3"
              fontSize={{ base: '10px', lg: '14px' }}
              height={{ base: '30px', md: '35px', lg: '54px' }}
              fontWeight="400"
              lineHeight="130%"
              color="#B8B8B8"
            />
            <Button
              borderRadius="0px 8px 8px 0px"
              w={{ base: '35.6%' }}
              bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)"
              fontSize={{ base: '14px', sm: '12px', md: '16px' }}
              lineHeight="19px"
              textAlign="center"
              color="#FFFFFF"
              height={{ base: '30px', md: '35px', lg: '54px' }}
              _hover={{
                bg: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)',
              }}
            >
              Search
            </Button>
          </Flex>
        </Box>
        <Flex
          w={{ base: '100%', sm: '38.4%' }}
          mt={{ base: '20px', sm: '0px' }}
          gap="5px"
          animation="bounceFromBottom 0.3s"
          display={{ base: 'none', sm: 'flex' }}
        >
          <VStack
            mt={{
              base: '60px',
              sm: '45px',
              md: '60px',
              lg: '71px',
              xl: '99px',
            }}
          >
            <Image src="assets/png/Home/image 4.png" />

            <Image src="assets/png/Home/image 6.png" />
          </VStack>

          <VStack>
            <Image src="assets/png/Home/image 3.png" />

            <Image src="assets/png/Home/image 5.png" />
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FirstSection;
