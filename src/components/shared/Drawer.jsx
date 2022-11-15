import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Box,
  Button,
  Flex,
  LinkBox,
  HStack,
  useDisclosure,
  Divider,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const DrawerComponent = ({ drawerState, setDrawerState }) => {
  const { onClose } = useDisclosure();
  return (
    <>
      {drawerState && (
        <Drawer
          isOpen={drawerState}
          onClose={onClose}
          placement="right"
          isFullHeight={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <Flex w="100%" h="70px" align="center" justify="space-between">
                <Box alignItems="center">
                  <LinkBox>
                    <HStack _hover={{ cursor: 'pointer' }}>
                      <Link to="/">
                        <Image
                          src="assets/svg/NavBrand.svg"
                          h="150px"
                          w="150px"
                        />
                      </Link>
                    </HStack>
                  </LinkBox>
                </Box>
                <Button
                  h={10}
                  w={10}
                  variant="unstyled"
                  m={3}
                  onClick={() => setDrawerState(false)}
                >
                  x
                </Button>
              </Flex>
            </DrawerHeader>
            <Divider />
            <DrawerBody>
              <Box animation="bounceFromBottom 0.5s">
                <Box>
                  <Button
                    bg="inherit"
                    _hover={{ transform: 'scale(1.2)', cursor: 'pointer' }}
                    fontSize="17px"
                    fontWeight="400"
                    onClick={() => setDrawerState(false)}
                  >
                    <Link to="/"> Home</Link>
                  </Button>
                </Box>
                <Box>
                  <Button
                    bg="inherit"
                    _hover={{ transform: 'scale(1.2)', cursor: 'pointer' }}
                    fontSize="17px"
                    fontWeight="400"
                    onClick={() => setDrawerState(false)}
                  >
                    <Link to="/placetostay"> Place To Stay</Link>
                  </Button>
                </Box>

                <Box>
                  <Button
                    bg="inherit"
                    _hover={{ transform: 'scale(1.2)', cursor: 'pointer' }}
                    fontSize="17px"
                    fontWeight="400"
                    onClick={() => setDrawerState(false)}
                  >
                    <Link to="/"> NFTs</Link>
                  </Button>
                </Box>

                <Box>
                  <Button
                    bg="inherit"
                    _hover={{ transform: 'scale(1.2)', cursor: 'pointer' }}
                    fontSize="17px"
                    fontWeight="400"
                    onClick={() => setDrawerState(false)}
                  >
                    <Link to="/"> Community</Link>
                  </Button>
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default DrawerComponent;
