import { EnterPage, LoginPage, MainPage, InterestPage, LocationPage } from "@/pages";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "components/Header";
import { ROUTE } from "util/constants";
import LoginLoadingPage from "@/pages/LoginLoadingPage";
const Routes = () => {
  const { ENTER, LOGIN, MAIN, INTEREST, LOCATION, OAUTH } = ROUTE;
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={ENTER} component={EnterPage} exact />
        <Route path={LOGIN} component={LoginPage} exact />
        <Route path={MAIN} component={MainPage} exact />
        {/* <Route path ={'/mypage'} component={MyPage} exact /> */}
        <Route path={INTEREST} component={InterestPage} exact />
        <Route path={LOCATION} component={LocationPage} exact />
        <Route path={OAUTH} component={LoginLoadingPage} exact />
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
