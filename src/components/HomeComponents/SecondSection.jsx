import { Grid, Heading, Box } from '@chakra-ui/react';
import React from 'react';
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
    "Frame 151 (7).png"
  ];
  return (
    <Box w={{lg: "90%", xl:"86.1%"}} h={{lg: "760px", xl:"963px"}} m="auto">
      <Heading
        mt={{lg: "30px", xl:"39px"}}
        textAlign="center"
        w="100%"
        fontSize={{lg: "35px", xl:"48px"}}
        lineHeight="60px"
        fontWeight="700"
      >
        Inspiration for your next adventure
      </Heading>

      <Box h="368px" p="0" gap="24px" mt={{lg: "35px", xl:"50px"}}>
        <Grid templateColumns={{md : 'repeat(2, 1fr)', lg:'repeat(4, 1fr)'}} gap={{lg: "20px", xl:"24px"}}>
          {PicList.map((ele) => {
            return <NftCard image={`Home/${ele}`} key={PicList.indexOf(ele)} stars={5}/>
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default SecondSection;
