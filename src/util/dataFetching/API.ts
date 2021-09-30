import { ROUTE } from "util/constants";
const clientURL = process.env.REACT_APP_CLIENT;
const serverURL = process.env.REACT_APP_SERVER;
const kakaoOauth = `https://kauth.kakao.com/oauth`;

const API = {
  //AUTH: 로그인관련 대문자
  kakaoOauthLogin() {
    // GET
    return `${kakaoOauth}/authorize?client_id=23782940861ed1c764f28841b9f83c80&redirect_uri=${
      clientURL + ROUTE.OAUTH_LOGIN
    }&response_type=code`;
  },
  login() {
    // POST with code into body
    return `${serverURL}/login/kakao`;
  },
  kakaoOauthLogout() {
    // GET
    return `${kakaoOauth}/logout?client_id=23782940861ed1c764f28841b9f83c80&logout_redirect_uri=${
      clientURL + ROUTE.OAUTH_LOGOUT
    }`;
  },
  logout() {
    return `${serverURL}/logout/kakao`;
  },
  USERINFO: {
    MAIN_INTERESTS() {
      return `${serverURL}/user/interests`;
    },
    DETAIL_INTERESTS(mainId: number) {
      return `${serverURL}/user/interests/${mainId}`;
    },
    LOCATION(locationInput: string) {
      return `http://dapi.kakao.com/v2/local/search/address.json?query=${locationInput}`;
    },
  },
};
export default API;
