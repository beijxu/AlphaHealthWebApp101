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

export const tinyButtonTheme = createTheme({
  palette: {
    info: {
        main: '#A1D2FF',
    },
    secondary: {
        main: '#000',
    }
  },
  MuiButton: {
    root: {
      padding: 0,
    }
  },
  MuiButtonBase: {
    root: {
      padding: 0,
    }
  }
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

export const healthProfileInputTheme = createTheme({
  components: {
    // Name of the component
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        input: {
          border: 0,
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: 0,
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: 0,
          height: '3px',
        }
      }
    }
  },
})