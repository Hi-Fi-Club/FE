import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import GlobalStyle from "./util/styles/GlobalStyle";
import theme from "./util/styles/theme";
import Routes from "./Routes";

const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
