import { createTheme } from '@mui/material/styles';

export const buttonTheme = createTheme({
  palette: {
    primary: {
        main: '#1DAF86',
       // dark: '#B4FFF6',
        contrastText: '#FFF',
    },
    secondary: {
        main: '#000',
    },
    info: {
        main: '#A1D2FF',
    }
  },
});