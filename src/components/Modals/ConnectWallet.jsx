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
    <Modal isOpen={isOpen} size="1440px" onClose={onClose} isCentered>
      <ModalOverlay h="1021px" />
      <ModalContent w="600px" h="326px" borderRadius="16px">
        <Flex
          p="24px 32px"
          h="78px"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #CFD8DC"
        >
          <Text
            fontSize="24px"
            lineHeight="30px"
            w="182px"
            fontWeight="700"
            color="#333333"
          >
            Connect Wallet
          </Text>
          <Image src="assets/svg/CloseButton.svg"  onClick={() => setModalState(false)} cursor="pointer" />
        </Flex>

        <ModalBody p="32px">
          <VStack spacing="16px" alignItems="flex-start">
            <Text
              fontSize="16px"
              lineHeight="20px"
              fontWeight="400"
              color="#333333"
            >
              Choose your preferred wallet:
            </Text>
            <Box
              display="flex"
              flexDirection="row"
              p="12px 20px"
              w="536px"
              h="68px"
              borderRadius="16px"
              border="1px solid #CFD8DC"
              bg="#F8F9FA"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex justifyContent="center" gap="16px" alignItems="center">
                <Image src="assets/svg/Metamask.svg" />
                <Text
                  fontSize="18px"
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
              p="12px 20px"
              w="536px"
              h="68px"
              borderRadius="16px"
              border="1px solid #CFD8DC"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex justifyContent="center" gap="16px" alignItems="center">
                <Image src="assets/svg/WalletConnect.svg" />
                <Text
                  fontSize="18px"
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
