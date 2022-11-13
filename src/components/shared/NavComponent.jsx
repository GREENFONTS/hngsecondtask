import { Flex, Image, Button, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConnectWallet from '../Modals/ConnectWallet';

const NavComponent = () => {
  const [modalState, setModalState] = useState(false);
  return (
    <Box
      w={{lg:'1240px', '2xl': "100%"}}
      m={{lg:'43px 100px 0px', '2xl': "43px auto 0px"}}
      p={{lg:"0px", '2xl': "0px 100px"}}
    >
      <Flex justifyContent="space-between" alignItems="center">
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

          <Link to="/placetostay">Place to Stay</Link>

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
            onClick={() => setModalState(true)}
          >
            Connect Wallet
          </Button>
        </Box>
      </Flex>

      <ConnectWallet isOpen={modalState} setModalState={setModalState} />
    </Box>
  );
};

export default NavComponent;
