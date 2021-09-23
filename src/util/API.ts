const API = {
  default() {
    return "localhost:3000";
  },
  kakaoOauthLogin() {
    // GET
    return "https://kauth.kakao.com/oauth/authorize?client_id=23782940861ed1c764f28841b9f83c80&redirect_uri=http://localhost:3000/oauth/kakao/callback&response_type=code";
  },
  login() {
    // POST with code into body
    return `http://ec2-15-164-119-79.ap-northeast-2.compute.amazonaws.com/api/login/kakao`;
  },
  kakaoOauthLogout() {
    // GET
    return "https://kauth.kakao.com/oauth/logout?client_id=23782940861ed1c764f28841b9f83c80&logout_redirect_uri=http://localhost:3000/oauth/kakao/logout";
  },
  logout() {
    // GET with <Bearer jwt> into header
    return `http://ec2-15-164-119-79.ap-northeast-2.compute.amazonaws.com/api/logout/kakao`;
  },
};

export default API;
