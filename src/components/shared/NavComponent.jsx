import { Flex, Image, Button, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConnectWallet from '../Modals/ConnectWallet';
import DrawerComponent from './Drawer';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavComponent = () => {
  const [modalState, setModalState] = useState(false);
  const [drawerState, setDrawerState] = useState(false)
  return (
    <Flex
      w={{ base: '90%', lg: '86.1%' }}
      m={{ base: '25px auto 0px', lg: '43px auto 0px' }}
    >
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <Flex w={{ base: '40%', sm: '20%', md: '18.8%' }}>
          <Image src="assets/svg/NavBrand.svg" h="36.67px" />
        </Flex>
        <Flex
          display={{ base: 'none', sm: 'flex' }}
          w={{ sm: '55%', md: '50%' }}
          fontSize={{ sm: '12px', md: '13px', lg: '16px', xl: '20px' }}
          fontWeight="400"
          lineHeight="25px"
          color="#434343"
          alignItems="center"
          justifyContent="center"
          gap={{ sm: '15px', md: '30px', lg: '34px', xl: '52px' }}
        >
          <Link to="/">Home</Link>

          <Link to="/placetostay">Place to Stay</Link>

          <Link to="/">NFTs</Link>

          <Link to="/">Community</Link>
        </Flex>
        <Flex w={{ base: '45%', sm: '18%', md: '13.7%' }} justifyContent="center" alignItems="center">
          <Button
            bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
            borderRadius={{ base: '7px', lg: '10px' }}
            h={{ base: '30px', lg: '40px', xl: '48px' }}
            w={{ base: '60%', sm: '100%' }}
            fontSize={{ base: '10px', lg: '16px' }}
            lineHeight="20px"
            color="#FFFFFF"
            onClick={() => setModalState(true)}
            _hover={{
              bg: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)',
            }}
          >
            Connect Wallet
          </Button>
            <Icon
            display={{base:"block", sm:"none"}}
              as={GiHamburgerMenu}
              ml="4"
              _hover={{ transform: 'scale(1.15)', cursor: 'pointer' }}
              fontSize="30px"
              onClick={() => setDrawerState(true)}
            />
            <DrawerComponent drawerState={drawerState} setDrawerState={setDrawerState}/>
          
        </Flex>
      </Flex>

      <ConnectWallet isOpen={modalState} setModalState={setModalState} />
    </Flex>
  );
};

export default NavComponent;
