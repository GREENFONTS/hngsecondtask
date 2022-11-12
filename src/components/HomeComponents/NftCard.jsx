import React from 'react';
import { Flex, Image, Text, VStack } from '@chakra-ui/react';

const NftCard = ({ image }) => {
  return (
    <VStack
      w="292px"
      p="16px"
      h="372px"
      border="1px solid #D7D7D7"
      bg="#FFFFFF"
      borderRadius="15px"
      spacing="16px"
      alignItems="normal"
    >
      <Image
        src={`assets/png/${image}`}
        w="260px"
        h="265px"
        borderRadius="15px"
      />

      <Flex
        justifyContent="space-between"
        fontSize="12px"
        lineHeight="13px"
        color="#434343"
      >
        <Text fontWeight="400">Desert King</Text>
        <Text fontWeight="700">1MBT per night</Text>
      </Flex>

      <Flex
        justifyContent="space-between"
        fontSize="12px"
        lineHeight="13px"
        color="#434343"
        fontWeight="400"
      >
        <Text>2345km away</Text>
        <Text>available for 2weeks stay</Text>
      </Flex>

      <Flex w="92px" h="12px" alignItems="flex-start" p="0" gap="8px">
        <Image src="assets/svg/Star 2.svg" h="12px" w="12px" />

        <Image src="assets/svg/Star 2.svg" h="12px" w="12px" />
        <Image src="assets/svg/Star 2.svg" h="12px" w="12px" />
        <Image src="assets/svg/Star 2.svg" h="12px" w="12px" />
        <Image src="assets/svg/Star 2.svg" h="12px" w="12px" />
      </Flex>
    </VStack>
  );
};

export default NftCard;
