import { Grid, Heading, Box, Flex, Text, Icon } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import NftCard from './NftCard';

const SecondSection = () => {
  const PicList = [
    'Frame 151.png',
    'Frame 151 (1).png',
    'Frame 151 (2).png',
    'Frame 151 (3).png',
    'Frame 151 (4).png',
    'Frame 151 (5).png',
    'Frame 151 (6).png',
    'Frame 151 (7).png',
  ];

  const pageSize = 4
  let defaultItems = PicList.slice(0, pageSize);

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [Page, setPage] = useState(1);
  const [items, setItems] = useState(defaultItems);

  const PrevHandler = () => {
    if (Page * pageSize - 1 < pageSize) {
      return;
    } else {
      setItems(PicList.slice((Page - 2) * pageSize, (Page -1) * pageSize));
      setPage(Page - 1);
    }
  };

  const NextHandler = () => {
    if (Page * pageSize  >= PicList.length) {
      return;
    } else {
      setItems(PicList.slice(Page * pageSize, (Page + 1) * pageSize));
      setPage(Page + 1);
    }
  };

  useEffect(() => {
    if (Page * pageSize - 1 < pageSize) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }

    if (Page * pageSize >= PicList.length) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
  }, [Page]);

  return (
    <Box
      w={{ md: '90%', xl: '86.1%' }}
      h={{ md: '800px', lg: '760px', xl: '963px' }}
      m="auto"
    >
      <Heading
        mt={{ md: '25px', lg: '30px', xl: '39px' }}
        textAlign="center"
        w="100%"
        fontSize={{ md: '26px', lg: '35px', xl: '48px' }}
        lineHeight="60px"
        fontWeight="700"
      >
        Inspiration for your next adventure
      </Heading>

      <Box p="0" gap="24px" mt={{ md: '30px', lg: '35px', xl: '50px' }}>
        <Grid
          templateColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={{ md: '15px', lg: '20px', xl: '24px' }}
        >
          {items.map(ele => {
            return (
              <NftCard
                image={`Home/${ele}`}
                key={PicList.indexOf(ele)}
                stars={5}
              />
            );
          })}
        </Grid>
      </Box>

      <Box
        mt="5"
        display={{ md: 'flex', lg: 'none' }}
        flexDirection="row"
        w="40%"
        justifyContent="space-between"
        alignItems="flex-end"
        float="right"
      >
        <Flex
          color="white"
          borderRadius="8px"
          w="35%"
          bg={
            prevDisabled
              ? 'gray.200'
              : 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)'
          }
          _focus={{
            bg: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)',
          }}
          justifyContent="space-between"
          alignItems="center"
          p="10px 15px"
          cursor="pointer"
          onClick={() => PrevHandler()}
        >
          <Icon as={MdChevronLeft} fontSize="20px" />
          <Text>Prev</Text>
        </Flex>
        <Flex
          color="white"
          borderRadius="8px"
          w="35%"
          cursor="pointer"
          bg={
            nextDisabled
              ? 'gray.200'
              : 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)'
          }
          _focus={{
            bg: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)',
          }}
          justifyContent="space-between"
          alignItems="center"
          p="10px 15px"
          onClick={() => NextHandler()}
        >
          <Text>Next</Text>
          <Icon as={MdChevronRight} fontSize="20px" />
        </Flex>
      </Box>
    </Box>
  );
};

export default SecondSection;
