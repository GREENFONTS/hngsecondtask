import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex h={{ lg: '276px', xl: '322px' }} w="100%" bg="#1D1D1E">
      <Box mt={{ lg: '42px', xl: '58px' }} ml={{ lg: '81px', xl: '113px' }}>
        <Image src="assets/svg/Group.svg" w={{ lg: '170px', xl: '233px' }} />

        <Box mt={{ lg: '80px', xl: '96px' }}>
          <HStack gap={{ lg: '23px', xl: '32px' }} h="18px">
            <Image src="assets/svg/Vector.svg" />

            <Image src="assets/svg/Vector (1).svg" />

            <Image src="assets/svg/Vector (2).svg" />
          </HStack>
        </Box>

        <Box mt={{ lg: '45px', xl: '55px' }} ml="5px" w="159px">
          <HStack spacing="16px" p="0">
            <Image src="assets/svg/Vector (3).svg" />
            <Text
              w={{ lg: '85px', xl: '113px' }}
              fontSize={{ lg: '12px', xl: '16px' }}
              lineHeight="16px"
              fontWeight="400"
              color="#F7F7F7"
            >
              2022 Metabnb
            </Text>
          </HStack>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        p="0"
        justifyContent="center"
        alignItems="center"
        h="169px"
        mt={{ lg: '48px', xl: '63px' }}
        fontSize="14px"
        fontWeight="400"
        lineHeight="35px"
        color="#F1F3F9"
        gap={{ lg: '155px', xl: '217px' }}
        w={{ lg: '500px', xl: '698px' }}
        ml={{lg: "140px",xl:"187px"}}
      >
        <Box w={{ lg: '80px', xl: '101px' }}>
          <Text
            fontSize={{ lg: '14px', xl: '18px' }}
            fontWeight="700"
            lineHeight={{ lg: '16px', xl: '22px' }}
          >
            Community
          </Text>
          <Box mt={{ lg: '19px', xl: '23px' }}>
            <Text>NFT</Text>
            <Text>Tokens</Text>
            <Text>Landlords</Text>
            <Text>Discord</Text>
          </Box>
        </Box>

        <Box w={{ lg: '90px'}}>
          <Text
            fontSize={{ lg: '14px', xl: '18px' }}
            fontWeight="700"
            lineHeight={{ lg: '16px', xl: '22px' }}
          >
            Places
          </Text>
          <Box w="inherit" mt={{ lg: '19px', xl: '23px' }}>
            <Text>Castle</Text>
            <Text>Farms</Text>
            <Text>Beach</Text>
            <Text>Learn more</Text>
          </Box>
        </Box>

        <Box w={{ lg: '79px' }}>
          <Text
            fontSize={{ lg: '14px', xl: '18px' }}
            fontWeight="700"
            lineHeight={{ lg: '16px', xl: '22px' }}
          >
            About us
          </Text>
          <Box w="inherit" mt={{ lg: '15px', xl: '23px' }}>
            <Text>Road Map</Text>
            <Text>Creators</Text>
            <Text>Career</Text>
            <Text>Contact us</Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Footer;
