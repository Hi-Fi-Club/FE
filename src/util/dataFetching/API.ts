import { ROUTE } from 'util/constants'
const clientURL = `http://localhost:3000`;
const serverURL = `http://ec2-15-164-119-79.ap-northeast-2.compute.amazonaws.com/api`;
const kakaoOauth = `https://kauth.kakao.com/oauth`;

const API = {
  //AUTH: 로그인관련 대문자
  kakaoOauthLogin() {
    // GET
    return `${kakaoOauth}/authorize?client_id=23782940861ed1c764f28841b9f83c80&redirect_uri=${clientURL+ROUTE.OAUTH_LOGIN}&response_type=code`;
  },
  login() {
    // POST with code into body
    return `${serverURL}/login/kakao`;
  },
  kakaoOauthLogout() {
    // GET
    return `${kakaoOauth}/logout?client_id=23782940861ed1c764f28841b9f83c80&logout_redirect_uri=${clientURL+ROUTE.OAUTH_LOGOUT}`;
  },
  logout() {
    // GET with <Bearer jwt> into header
    return `${serverURL}/logout/kakao`;
  },
  USERINFO: {
    MAIN_INTERESTS() {
      return `${serverURL}/user/interests`;
    },
    userInterestsDetail(mainId: number) {
      return `${serverURL}/user/interests/${mainId}`;
    },
    LOCATION(locationInput: string) {
      return `http://dapi.kakao.com/v2/local/search/address.json?query=${locationInput}`;
    },
  },
};
export default API;
