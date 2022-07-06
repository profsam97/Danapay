import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {createTheme, ThemeProvider} from "@mui/material";
import ContextProvider from "../Context/ContextProvider";
import SnackbarComponent from "../Component/Utils/Snackbar";

function MyApp({ Component, pageProps }: AppProps) {
    const theme = createTheme({
        typography: {
            fontFamily: 'Quicksand',
            fontWeightBold: 700,
            fontWeightLight: 400,
            fontWeightRegular: 500,
            fontWeightMedium: 600
        }
    })
  return (
              <ContextProvider>
      <ThemeProvider theme={theme}>
              <SnackbarComponent/>
        <Component {...pageProps} />
      </ThemeProvider>
          </ContextProvider>

      )
}

export default MyApp
