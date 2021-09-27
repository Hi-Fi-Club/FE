import { useMemo } from "react";
import { EnterPage, LoginPage, MainPage, RegisterInterestPage, RegisterLocationPage } from "@/pages";
import { Route, Redirect, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "components/Header";
import { ROUTE } from "util/constants";
import LoginLoadingPage from "pages/auth/LoginLoadingPage";
import LogoutLoadingPage from "pages/auth/LogoutLoadingPage";
import { isLogin } from "util/funcs";
const Routes = () => {
  const { ENTER, LOGIN, MAIN, USER, OAUTH_LOGIN, OAUTH_LOGOUT } = ROUTE;

  return (
    <Router>
      <Header />
      <Switch>
        <Route path={ENTER} component={EnterPage} exact />
        <Route path={LOGIN} component={LoginPage} exact />
        <Route path={MAIN} component={MainPage} exact />
        {/* <Route path ={'/mypage'} component={MyPage} exact /> */}
        <Route path={USER.INTEREST} component={RegisterInterestPage} exact />
        <Route path={USER.LOCATION} component={RegisterLocationPage} exact />
        <Route path={OAUTH_LOGIN} component={LoginLoadingPage} exact />
        <Route path={OAUTH_LOGOUT} component={LogoutLoadingPage} exact />
        {/* <Route path ={'/recruitments/pages/:page'} component={RecruitmentsPage} exact /> */}
        {/* <Route path ={'/recruitments/:id'} component={RecruitmentDetailPage} exact /> */}
        {/* <Route path ={'/recruitments/new'} component={newRecruitmentPage} exact /> */}
        {/* <Route path ={'/rooms'} component={roomsPage} exact /> */}
        {/* <Route path ={'/rooms/:id'} component={roomDetailPage} exact /> */}
        {/* <Route path ={'/uploadroom'} component={uploadRoomPage} exact /> */}
        {/* <Route path ={'/admin'} component={adminPage} exact /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
