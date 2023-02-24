import { createTheme } from '@mui/material/styles';

export const buttonTheme = createTheme({
  palette: {
    info: {
        main: '#A1D2FF',
    },
    secondary: {
        main: '#000',
    }
  },
});

export const filterModalTheme = createTheme({
  components: {
    // Name of the component
    MuiTableCell: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '0.875rem',
          border: 0,
          padding: 0
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '0.875rem',
        },
      },
    },
  },
});