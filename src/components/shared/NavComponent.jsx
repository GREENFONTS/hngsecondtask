import { Flex, Image, Button, Box} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" w="90%" mt="3" p="5" m="auto">
      <Flex>
        <Image src="assets/svg/NavBrand.svg" h="32px" w="188px" />
      </Flex>
      <Flex
        justifyContent="space-between"
        w="40%"
        fontSize="15px"
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
          w="150px"
          h="40px"
          fontSize="15px"
          lineHeight="20px"
          color="#FFFFFF"
        >
          Connect Wallet
        </Button>
      </Box>
    </Flex>
  );
};

export default NavComponent;
