import { Flex, Image, Button, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConnectWallet from '../Modals/ConnectWallet';

const NavComponent = () => {
  const [modalState, setModalState] = useState(false);
  return (
    <Box w={{ lg: '86.1%' }} m={{ lg: '43px auto 0px' }}>
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <Flex w={{ lg: '18.8%' }}>
          <Image src="assets/svg/NavBrand.svg" h="36.67px" />
        </Flex>
        <Flex
          w="50%"
          fontSize={{ lg: '16px', xl: '20px' }}
          fontWeight="400"
          lineHeight="25px"
          color="#434343"
          gap={{ lg: '34px', xl: '52px' }}
        >
          <Link to="/">Home</Link>

          <Link to="/placetostay">Place to Stay</Link>

          <Link to="/">NFTs</Link>

          <Link to="/">Community</Link>
        </Flex>
        <Button
          bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
          borderRadius="10px"
          h={{lg : "40px", xl: "48px"}}
          w={{ lg: '13.7%' }}
          fontSize="12px"
          lineHeight="20px"
          color="#FFFFFF"
          onClick={() => setModalState(true)}
        >
          Connect Wallet
        </Button>
      </Flex>

      <ConnectWallet isOpen={modalState} setModalState={setModalState} />
    </Box>
  );
};

export default NavComponent;
