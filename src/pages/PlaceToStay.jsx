import { Box, Flex, Image, Text, Grid, Icon } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NftCard from '../components/HomeComponents/NftCard';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const PlaceToStay = () => {
  const PicList = [
    'Frame 151.png',
    'Frame 151 (1).png',
    'Frame 151 (2).png',
    'Frame 151 (3).png',
    'Frame 151 (4).png',
    'Frame 151 (5).png',
    'Frame 151 (6).png',
    'Frame 151 (7).png',
    'Frame 151 (8).png',
    'Frame 151 (9).png',
    'Frame 151 (10).png',
    'Frame 151 (11).png',
    'Frame 151 (12).png',
    'Frame 151 (13).png',
    'Frame 151 (14).png',
    'Frame 151 (15).png',
  ];

  const pageSize = 4;
  let defaultItems = PicList.slice(0, pageSize);

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [Page, setPage] = useState(1);
  const [items, setItems] = useState(defaultItems);

  const PrevHandler = () => {
    if (Page * pageSize - 1 < pageSize) {
      return;
    } else {
      setItems(PicList.slice((Page - 2) * pageSize, (Page - 1) * pageSize));
      setPage(Page - 1);
    }
  };

  const NextHandler = () => {
    if (Page * pageSize >= PicList.length) {
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
      w={{ md: '90%', lg: '86.1%' }}
      h={{ md: '830px', lg: '1480px', xl: '1879px' }}
      m={{ md: '10px auto 0px', lg: '43px auto 0px' }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          p="0px"
          gap={{ md: '20px', lg: '35px', xl: '48px' }}
          h="23px"
          mt={{ md: '40px', lg: '91px', xl: '127px' }}
          lineHeight="25px"
          fontWeight="400"
          color="#434343"
          fontSize={{ md: '12px', lg: '13px', xl: '18px' }}
        >
          <Link to="/placetostay">Restaurant</Link>

          <Link to="/cottage">Cottage</Link>

          <Link to="/placetostay">Castle</Link>

          <Link to="/placetostay">fantasy city</Link>

          <Link to="/placetostay">bench</Link>

          <Link to="/placetostay">Carbins</Link>

          <Link to="/placetostay">Off-grid</Link>

          <Link to="/placetostay">Farm</Link>

          <Flex
            w={{ md: '110px', lg: '130px', xl: '161px' }}
            h={{ md: '35px', lg: '40px', xl: '48px' }}
            borderRadius="8px"
            border="1px solid #B4B4B4"
            justifyContent="space-around"
            alignItems="center"
          >
            <Text
              fontWeight="400"
              fontSize={{ md: '12px', lg: '14px', xl: '16px' }}
              lineHeight="19px"
            >
              Location
            </Text>
            <Image
              src="assets/svg/settings.svg"
              h={{ md: '14px', lg: '17px', xl: '24px' }}
              w={{ md: '14px', lg: '17px', xl: '24px' }}
            />
          </Flex>
        </Box>
      </Flex>

      <Box
        mt={{ md: '40px', lg: '55px', xl: '71px' }}
        h={{ md: '630px', lg: '1200px', xl: '1560px' }}
      >
        <Grid
          templateColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={{ md: '15px', lg: '20px', xl: '24px' }}
        >
          {items.map(ele => {
            return (
              <NftCard
                image={`Place_to_stay/${ele}`}
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

export default PlaceToStay;
