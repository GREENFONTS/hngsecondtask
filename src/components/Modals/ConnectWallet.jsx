import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  Flex,
  Box,
  Image,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const ConnectWallet = ({ isOpen, setModalState }) => {
  const { onClose } = useDisclosure();
  return (
    <Modal isOpen={isOpen} size="100%" onClose={onClose} isCentered>
      <ModalOverlay h={{sm:"800px",lg:"1021px"}} />
      <ModalContent
        w={{base:"90%", sm: '80%', md: '55%', xl: '42%' }}
        h="fit-content"
        borderRadius="16px"
        p={{base:"2"}}
      >
        <Flex
          p={{base:"15px", sm: '15px 20px', md: '24px 27px', lg: '24px 32px' }}
          h={{ sm: '60px', lg: '78px' }}
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #CFD8DC"
        >
          <Text
            fontSize={{base:"18px", sm: '20px', lg: '24px' }}
            lineHeight="30px"
            fontWeight="700"
            color="#333333"
          >
            Connect Wallet
          </Text>
          <Image
            src="assets/svg/CloseButton.svg"
            onClick={() => setModalState(false)}
            cursor="pointer"
          />
        </Flex>

        <ModalBody p={{base:"16px", sm: '20px', lg: '32px' }}>
          <VStack spacing={{base:"12px",sm:"16px"}} alignItems="flex-start">
            <Text
              fontSize={{base:"14px",sm:"16px"}}
              lineHeight="20px"
              fontWeight="400"
              color="#333333"
            >
              Choose your preferred wallet:
            </Text>
            <Box
              display="flex"
              flexDirection="row"
              p={{base:"7px 9px", sm: '10px 16px', lg: '12px 20px' }}
              h={{base:"55px", sm: '65px', lg: '68px' }}
              w="100%"
              borderRadius="16px"
              border="1px solid #CFD8DC"
              bg="#F8F9FA"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex justifyContent="center" gap="16px" alignItems="center">
                <Image src="assets/svg/Metamask.svg" />
                <Text
                  fontSize={{base:"13px",sm:"16px"}}
                  lineHeight="23px"
                  fontWeight="600"
                  color="#000000"
                >
                  Metamask
                </Text>
              </Flex>

              <Image src="assets/svg/DownChevron.svg" />
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              p={{base:"7px 9px", sm: '10px 16px', lg: '12px 20px' }}
              h={{base:"55px", sm: '65px', lg: '68px' }}
              w="100%"
              borderRadius="16px"
              border="1px solid #CFD8DC"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex justifyContent="center" gap="16px" alignItems="center">
                <Image src="assets/svg/WalletConnect.svg" />
                <Text
                  fontSize={{base:"13px",sm:"16px"}}
                  lineHeight="23px"
                  fontWeight="600"
                  color="#000000"
                >
                  Wallet Connect
                </Text>
              </Flex>

              <Image src="assets/svg/DownChevron.svg" />
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConnectWallet;
