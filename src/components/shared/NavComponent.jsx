import { Flex, Image, Button, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  return (
    <Box w="1240px" m="auto">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mt="3"
        p="5"
        m="auto"
      >
        <Flex>
          <Image src="assets/svg/NavBrand.svg" h="36.67px" w="233px" />
        </Flex>
        <Flex
          justifyContent="space-between"
          w="40%"
          fontSize="20px"
          fontWeight="400"
          lineHeight="25px"
          color="#434343"
        >
          <Link to="/">Home</Link>

          <Link to="/">Place to Stay</Link>

          <Link to="/">NFTs</Link>

          <Link to="/">Community</Link>
        </Flex>

        <Box>
          <Button
            bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
            borderRadius="10px"
            w="170px"
            h="48px"
            fontSize="15px"
            lineHeight="20px"
            color="#FFFFFF"
          >
            Connect Wallet
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavComponent;
