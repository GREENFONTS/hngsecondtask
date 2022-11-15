import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex w="100%" bg="#1D1D1E" pb="3">
      <Box
        mt={{ base: '32px', md: '35px', lg: '42px', xl: '58px' }}
        ml={{ base: '15px', sm: '65px', lg: '81px', xl: '113px' }}
      >
        <Image
          src="assets/svg/Group.svg"
          w={{
            base: '100px',
            sm: '125px',
            md: '140px',
            lg: '170px',
            xl: '233px',
          }}
        />

        <Box mt={{ base: '40px', sm: '60px', md: '80px', xl: '96px' }}>
          <HStack
            gap={{ base: '10px', sm: '18px', lg: '23px', xl: '32px' }}
            h="18px"
          >
            <Image src="assets/svg/Vector.svg" />

            <Image src="assets/svg/Vector (1).svg" />

            <Image src="assets/svg/Vector (2).svg" />
          </HStack>
        </Box>

        <Box
          mt={{ base: '20px', sm: '30px', md: '35px', lg: '45px', xl: '55px' }}
          ml="5px"
          w={{ base: '80px', sm: '100px', md: '120px', lg: '159px' }}
        >
          <HStack
            spacing={{ base: '7px', sm: '10px', md: '12px', lg: '16px' }}
            p="0"
          >
            <Image
              src="assets/svg/Vector (3).svg"
              h={{ base: '15px', sm: '20px' }}
            />
            <Text
              w={{ base: '50px', sm: '70px', lg: '85px', xl: '113px' }}
              fontSize={{ base: '10px', lg: '12px', xl: '16px' }}
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
        mt={{ base: '20px', sm: '25px', md: '35px', lg: '48px', xl: '63px' }}
        fontSize={{ base: '10px', sm: '11px', md: '12px', lg: '14px' }}
        fontWeight="400"
        lineHeight="35px"
        color="#F1F3F9"
        gap={{
          base: '20px',
          sm: '50px',
          md: '120px',
          lg: '155px',
          xl: '217px',
        }}
        w={{ base: '400px', md: '400px', lg: '500px', xl: '698px' }}
        ml={{ base: '10px', sm: '80px', md: '110px', lg: '140px', xl: '187px' }}
      >
        <Box w={{ sm: '70px', lg: '80px', xl: '101px' }}>
          <Text
            fontSize={{ sm: '11px', md: '12px', lg: '14px', xl: '18px' }}
            fontWeight="700"
            lineHeight={{ sm: '11px', md: '12px', lg: '16px', xl: '22px' }}
          >
            Community
          </Text>
          <Box mt={{ sm: '12px', md: '15px', lg: '19px', xl: '23px' }}>
            <Text>NFT</Text>
            <Text>Tokens</Text>
            <Text>Landlords</Text>
            <Text>Discord</Text>
          </Box>
        </Box>

        <Box w={{ sm: '70px', lg: '80px', xl: '101px' }}>
          <Text
            fontSize={{ sm: '11px', md: '12px', lg: '14px', xl: '18px' }}
            fontWeight="700"
            lineHeight={{ sm: '11px', md: '12px', lg: '16px', xl: '22px' }}
          >
            Places
          </Text>
          <Box
            w="inherit"
            mt={{ sm: '12px', md: '15px', lg: '19px', xl: '23px' }}
          >
            <Text>Castle</Text>
            <Text>Farms</Text>
            <Text>Beach</Text>
            <Text>Learn more</Text>
          </Box>
        </Box>

        <Box w={{ sm: '70px', lg: '80px', xl: '101px' }}>
          <Text
            fontSize={{ sm: '11px', md: '12px', lg: '14px', xl: '18px' }}
            fontWeight="700"
            lineHeight={{ sm: '11px', md: '12px', lg: '16px', xl: '22px' }}
          >
            About us
          </Text>
          <Box
            w="inherit"
            mt={{ sm: '12px', md: '15px', lg: '19px', xl: '23px' }}
          >
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
