import { Spinner, Box, Stack } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      zIndex="9999999"
      bg="white"
      w="100%"
      h="100vh"
      opacity="1"
    >
      <Stack justifyContent="center" h="inherit" alignItems="center">
        <Spinner size="xl" color="primary-1" />
      </Stack>
    </Box>
  );
};

export default Loading;
