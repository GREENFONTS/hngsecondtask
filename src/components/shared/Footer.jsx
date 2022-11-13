import { Box, Flex, HStack, Image, Text} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex h="322px" bg="#1D1D1E">
      <Box mt="58px" ml="113px">
        <Image src="assets/svg/Group.svg" />

        <Box mt="96px">
          <HStack gap="32px" h="18px">
            <Image src="assets/svg/Vector.svg" />

            <Image src="assets/svg/Vector (1).svg" />

            <Image src="assets/svg/Vector (2).svg" />
          </HStack>
        </Box>

        <Box mt="55px" ml="5px" w="159px">
          <HStack spacing="16px" p="0">
            <Image src="assets/svg/Vector (3).svg" />
            <Text
              w="113px"
              fontSize="16px"
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
        mt="63px"
        fontSize="14px"
        fontWeight="400"
        lineHeight="35px"
        color="#F1F3F9"
        gap="217px"
        w="698px"
        ml="187px"
      >
        <Box w="101px">
          <Text fontSize="18px" fontWeight="700" lineHeight="22px">
            Community
          </Text>
          <Box mt="23px">
            <Text>NFT</Text>
            <Text>Tokens</Text>
            <Text>Landlords</Text>
            <Text>Discord</Text>
          </Box>
        </Box>

        <Box w="84px">
          <Text fontSize="18px" fontWeight="700" lineHeight="22px">
            Places
          </Text>
          <Box mt="23px">
            <Text>Castle</Text>
            <Text>Farms</Text>
            <Text>Beach</Text>
            <Text>Learn more</Text>
          </Box>
        </Box>

        <Box w="79px">
          <Text fontSize="18px" fontWeight="700" lineHeight="22px">
            About us
          </Text>
          <Box mt="23px">
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
