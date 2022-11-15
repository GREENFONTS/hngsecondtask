import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  base: '320px',
  sm:"500px",
  md: '769px',
  lg: '1025px',
  xl: '1210px',
  '2xl': '1450px',
};

const theme = extendTheme({
  fonts: {
    heading: `'Red Rose', sans-serif`,
    body: `'Red Rose', sans-serif`,
  },
  breakpoints,
});

export default theme;
