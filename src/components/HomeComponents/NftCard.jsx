import React from 'react';
import { Flex, Image, Text, VStack } from '@chakra-ui/react';

const NftCard = ({ image, stars }) => {
  return (
    <VStack
      w={{ md: '100%' }}
      p={{ md: '10px', xl: '16px' }}
      h={{ md: '300px', xl: '372px' }}
      border="1px solid #D7D7D7"
      bg="#FFFFFF"
      borderRadius="15px"
      spacing={{md: "11px", xl:"14px"}}
      alignItems="normal"
    >
      <Image
        src={`assets/png/${image}`}
        w={{ md: '100%', lg: '292px' }}
        h={{ md: '200px', xl: '265px' }}
        borderRadius="15px"
      />

      <Flex
        justifyContent="space-between"
        fontSize={{lg: "9px", xl:"12px"}}
        lineHeight="13px"
        color="#434343"
      >
        <Text fontWeight="400">Desert King</Text>
        <Text fontWeight="700">1MBT per night</Text>
      </Flex>

      <Flex
        justifyContent="space-between"
        fontSize={{lg: "9px", xl:"12px"}}
        lineHeight="13px"
        color="#434343"
        fontWeight="400"
      >
        <Text>2345km away</Text>
        <Text>available for 2weeks stay</Text>
      </Flex>

      <Flex w={{lg : "70px", xl: "92px"}} h="12px" alignItems="flex-start" p="0" gap="8px">
        {[...Array(stars)].map((e, i) => (
          <Image src="assets/svg/Star 2.svg" h={{lg : "9px", xl: "12px"}} w={{lg : "9px", xl: "12px"}} key={i} />
        ))}
      </Flex>
    </VStack>
  );
};

export default NftCard;
