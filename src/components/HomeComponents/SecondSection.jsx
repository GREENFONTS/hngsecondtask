import { Grid, Heading, Box } from '@chakra-ui/react';
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

  return (
    <Box
      w={{ base: '90%', xl: '86.1%' }}
      m={{ base: '0px auto 25px', sm: '0px auto 40px' }}
    >
      <Heading
        mt={{ base: '15px', sm: '25px', lg: '30px', xl: '39px' }}
        textAlign="center"
        w="100%"
        fontSize={{
          base: '17px',
          sm: '22px',
          md: '26px',
          lg: '35px',
          xl: '48px',
        }}
        lineHeight="60px"
        fontWeight="700"
      >
        Inspiration for your next adventure
      </Heading>

      <Box
        p="0"
        gap="24px"
        mt={{ base: '15px', sm: '27px', md: '30px', lg: '35px', xl: '50px' }}
      >
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{  base: '8px', lg: '20px', xl: '24px' }}
        >
          {PicList.map(ele => {
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
    </Box>
  );
};

export default SecondSection;
