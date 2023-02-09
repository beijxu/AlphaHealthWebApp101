import { createTheme } from '@mui/material/styles';

export const buttonTheme = createTheme({
  palette: {
    primary: {
        main: '#1DAF86',
        dark: '#B4FFF6',
        contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
        main: '#000',
    },
  },
});