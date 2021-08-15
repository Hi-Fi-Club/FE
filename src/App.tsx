import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./util/styles/GlobalStyle";
import theme from "./util/styles/theme";

import { EnterPage, LoginPage, MainPage, InterestPage, LocationPage } from "./pages";
import Header from "./components/Header";

const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header/>
          <Switch>
            <Route path={"/"} component={EnterPage} exact />
            <Route path={"/login"} component={LoginPage} exact />
            <Route path={"/main"} component={MainPage} exact />
            {/* <Route path ={'/mypage'} component={MyPage} exact /> */}
            <Route path ={'/interest'} component={InterestPage} exact />
            <Route path ={'/location'} component={LocationPage} exact />
            {/* <Route path ={'/recruitments/pages/:page'} component={RecruitmentsPage} exact /> */}
            {/* <Route path ={'/recruitments/:id'} component={RecruitmentDetailPage} exact /> */}
            {/* <Route path ={'/recruitments/new'} component={newRecruitmentPage} exact /> */}
            {/* <Route path ={'/rooms'} component={roomsPage} exact /> */}
            {/* <Route path ={'/rooms/:id'} component={roomDetailPage} exact /> */}
            {/* <Route path ={'/uploadroom'} component={uploadRoomPage} exact /> */}
            {/* <Route path ={'/admin'} component={adminPage} exact /> */}
           
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
