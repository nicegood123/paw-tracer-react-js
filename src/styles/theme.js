import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#7CB2B1',
    },
    secondary: {
      main: "#7CB2B1",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "white"
    },
  },
});

export default theme;