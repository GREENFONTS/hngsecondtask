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
      w={{ md: '90%', lg: '86.1%' }}
      m={{ md: '10px auto 0px', lg: '43px auto 0px' }}
      h={{ md: '350px', lg: '450px', xl: '583px' }}
    >
      <Flex justifySelf="space-between" gap={{ md: '8%' }} w="100%" m="auto">
        <Box w="52%" h="495px" mt={{ lg: '21.3px', xl: '29.46px' }}>
          <Heading
            fontSize={{md:"30px", lg: '41px', xl: '50px', '2xl': '61px' }}
            lineHeight={{md:"120%", xl: '140%', '2xl': '130%' }}
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

          <Flex mt={{md:"27px", lg: '34.1px', xl: '48px', '2xl': '40px' }}>
            <Text
              fontSize={{md:"13px", lg: '18px', xl: '24px', '2xl': '26px' }}
              lineHeight={{md:"25px",lg:"35px"}}
            >
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your <br /> imagination to reality
              at your comfort zone
            </Text>
          </Flex>

          <Flex mt={{md:"30px", lg: '34.1px', xl: '48px' }}>
            <Input
              placeholder="Search for location"
              w={{ lg: '60%' }}
              borderRadius="8px 0px 0px 8px"
              border="1px solid #A3A3A3"
              fontSize={{md:"10px",lg:"14px"}}
              height={{md:"40px",lg:"54px"}}
              fontWeight="400"
              lineHeight="130%"
              color="#B8B8B8"
            />
            <Button
              borderRadius="0px 8px 8px 0px"
              w={{ md: '35.6%' }}
              bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)"
              fontSize="16px"
              lineHeight="19px"
              textAlign="center"
              color="#FFFFFF"
              height={{md:"40px",lg:"54px"}}
              _hover={{
                bg: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)',
              }}
            >
              Search
            </Button>
          </Flex>
        </Box>
        <Flex
          w={{ lg: '38.4%' }}
          h="595px"
          gap="5px"
          animation="bounceFromBottom 0.3s"
        >
          <VStack mt={{ lg: '71px', xl: '99px' }}>
            <Image
              src="assets/png/Home/image 4.png"
              h={{md:"130px", lg: '155px', xl: '176px' }}
              w={{md:"150px", lg: '200px', xl: '234px' }}
            />

            <Image
              src="assets/png/Home/image 6.png"
              h={{md:"130px", lg: '155px', xl: '176px' }}
              w={{md:"150px", lg: '200px', xl: '234px' }}
            />
          </VStack>

          <VStack>
            <Image
              src="assets/png/Home/image 3.png"
              h={{md:"130px", lg: '155px', xl: '176px' }}
              w={{md:"150px", lg: '200px', xl: '234px' }}
            />

            <Image
              src="assets/png/Home/image 5.png"
              h={{md:"130px", lg: '155px', xl: '176px' }}
              w={{md:"150px", lg: '200px', xl: '234px' }}
            />
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FirstSection;
