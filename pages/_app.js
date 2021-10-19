import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

//color themes
const colors = {
  brand: {
    900: "linear-gradient(140.92deg, #EAD270 14.94%, #F6E384 85.48%)",
  },
};

const theme = extendTheme({colors});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
