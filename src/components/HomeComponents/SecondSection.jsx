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
    <Box w="1240px" m="auto">
      <Heading
        mt="39px"
        textAlign="center"
        w="100%"
        fontSize="48px"
        lineHeight="60px"
        fontWeight="700"
      >
        Inspiration for your next adventure
      </Heading>

      <Box h="368px" p="0" gap="24px" mt="50px">
        <Grid templateColumns='repeat(4, 1fr)' gap="24px">
          {PicList.map((ele) => {
            return <NftCard image={ele}/>
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default SecondSection;
