import { Box, Flex, Image, Text, Grid, Select } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import NftCard from '../components/HomeComponents/NftCard';

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
  return (
    <Box
      w={{ base: '90%', lg: '86.1%' }}
      m={{base:"10px auto 20px", sm: '10px auto 40px', lg: '23px auto 40px' }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w={{base: '100%', md: '95%' }}
        mt={{ base: '35px', md: '40px', lg: '70px', xl: '97px' }}
      >
        <Box
          mt="0px"
          display={{ base: 'none', sm: 'flex' }}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          p="0px"
          gap={{ sm: '10px', md: '20px', lg: '35px', xl: '48px' }}
          h={{ sm: '23px' }}
          lineHeight="25px"
          fontWeight="400"
          color="#434343"
          fontSize={{ sm: '11px', md: '12px', lg: '13px', xl: '17px' }}
        >
          <Link to="/placetostay">Restaurant</Link>

          <Link to="/cottage">Cottage</Link>

          <Link to="/placetostay">Castle</Link>

          <Link to="/placetostay">fantasy city</Link>

          <Link to="/placetostay">bench</Link>

          <Link to="/placetostay">Carbins</Link>

          <Link to="/placetostay">Off-grid</Link>

          <Link to="/placetostay">Farm</Link>
        </Box>

        <Select w="40%" h="40px" placeholder="Places" display={{base:"block", sm:"none"}}>
          <option value="option1">Restaurant</option>
          <option value="option2">Cottage</option>
          <option value="option3">Castle</option>
          <option value="option3">fantasy city</option>
          <option value="option3">bench</option>
          <option value="option3">Carbins</option>
          <option value="option3">Off-grid</option>
          <option value="option3">Farm</option>
        </Select>

        <Flex
          w={{ base: '30%', sm:"90px", md: '110px', lg: '130px', xl: '161px' }}
          h={{base:"40px", sm: '30px', md: '35px', lg: '40px', xl: '48px' }}
          borderRadius="8px"
          border="1px solid #B4B4B4"
          justifyContent="space-around"
          alignItems="center"
        >
          <Text
            fontWeight="400"
            fontSize={{ base: '11px', md: '12px', lg: '14px', xl: '16px' }}
            lineHeight="19px"
          >
            Location
          </Text>
          <Image
            src="assets/svg/settings.svg"
            h={{ base: '15px', md: '14px', lg: '17px', xl: '24px' }}
            w={{ base: '15px', md: '14px', lg: '17px', xl: '24px' }}
          />
        </Flex>
      </Flex>

      <Box mt={{ base: '30px', md: '40px', lg: '55px', xl: '61px' }}>
        <Grid
          templateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
          gap={{ base: '10px', md: '15px', lg: '20px', xl: '24px' }}
        >
          {PicList.map(ele => {
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
    </Box>
  );
};

export default PlaceToStay;
