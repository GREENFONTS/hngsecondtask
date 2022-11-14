import { Box, Flex, Image, Text, Grid } from '@chakra-ui/react';
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
    <Box w="86.1%" h={{lg : "1480px", xl: "1879px"}} m={{lg : "0px auto", xl: "0px auto"}} >
      <Flex justifyContent="space-between" alignItems="center">
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          p="0px"
          gap={{lg : "35px", xl: "48px"}}
          h="23px"
          mt={{lg : "91px", xl: "127px"}}
          lineHeight="25px"
          fontWeight="400"
          color="#434343"
          fontSize={{lg : "14px", xl: "20px"}}
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
            w={{lg : "130px", xl: "161px"}}
            h={{lg : "40px", xl: "48px"}}
            borderRadius="8px"
            border="1px solid #B4B4B4"
            justifyContent="space-around"
            alignItems="center"
          >
            <Text fontWeight="400" fontSize={{lg : "14px", xl: "16px"}} lineHeight="19px">
              Location
            </Text>
            <Image src="assets/svg/settings.svg" h={{lg : "17px", xl: "24px"}} w={{lg : "17px", xl: "24px"}} />
          </Flex>
        </Box>
      </Flex>

      <Box mt={{lg : "55px", xl: "71px"}} h={{lg : "1200px", xl: "1560px"}}>
        <Grid templateColumns={{md : 'repeat(2, 1fr)', lg:'repeat(4, 1fr)'}} gap={{lg:"17px", xl:"24px"}}>
          {PicList.map(ele => {
            return <NftCard image={`Place_to_stay/${ele}`} key={PicList.indexOf(ele)} stars={5} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default PlaceToStay;
