import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  base: '375px',
  md: '768px',
  lg: '960px',
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
