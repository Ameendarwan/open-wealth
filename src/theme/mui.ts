/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2F65F6',
      dark: '#0240C7',
      900: '#0240C7',
      800: '#234feb',
      700: '#2F65F6',
      500: '#4685FD',
      300: '#6DAFFF',
      100: '#A4DAFF',
      50: '#E3F8FF',
    },
    secondary: {
      main: '#326eb3',
    },
    warning: {
      main: '#D3A117',
      dark: '#BF900F',
      contrastText: '#fff',
    },
    success: {
      main: '#07B375',
      light: '#01915F',
      dark: '#096C4A',
      100: '#E71818',
      50: '#E3FFEB',
    },
    error: {
      main: '#D80909',
      dark: '#C70202',
      50: '#FFE3E3',
      100: '#F23333',
    },
    info: {
      main: '#F3F5F8',
      dark: '#E7EBF1',
      50: '#F0C241',
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    grey: {
      900: '#EBF0FD',
      800: '#212526',
      700: '#2E3A5D',
      600: '#5F686E',
      500: '#485574',
      400: '#96A1AC',
      300: '#C1CCDA',
      200: '#DAE4EB',
      100: '#F3F5F8',
      50: '#F3F6FA',
    },
    text: {
      primary: '#212526',
    },
    divider: '#e0e0e0',
  },
  breakpoints: {
    values: {
      xs: 450, // Extra small devices (phones, less than 600px)
      sm: 600, // Small devices (tablets, 600px and up)
      md: 960, // Medium devices (small laptops, 960px and up)
      lg: 1280, // Large devices (desktops, 1280px and up)
      xl: 1920, // Extra large devices (large desktops, 1920px and up)
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 16,
    allVariants: {
      fontFamily:
        'soleil, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
    button: {
      textTransform: 'none',
      letterSpacing: 0,
      boxShadow: 'none',
      fontFamily:
        'soleil, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
    h1: {
      fontSize: '6.4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '4.8rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '3.2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '2.4rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '1.6rem',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme: baseTheme }) => ({
          minWidth: 0,
          borderRadius: '0.2rem',
          fontSize: '5rem',
          ...(ownerState.size === 'small' && {
            padding: `${baseTheme.spacing(0.25)} ${baseTheme.spacing(1.25)}`,
          }),
          ...(ownerState.size === 'medium' && {
            padding: `${baseTheme.spacing(1)} ${baseTheme.spacing(2)}`,
          }),
          ...(ownerState.size === 'large' && {
            padding: `${baseTheme.spacing(1)} ${baseTheme.spacing(4)}`,
          }),
          '&:disabled': {
            backgroundColor: '#2F65F6',
            color: '#FFFFFF',
            opacity: '25%',
          },
        }),
      },
    },
  },
})
