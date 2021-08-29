const API = {
  default() {
    return "localhost:8080";
  },
  kakaoOauth() {
    return "https://kauth.kakao.com/oauth/authorize?client_id=23782940861ed1c764f28841b9f83c80&redirect_uri=http://localhost:8080/oauth/kakao/callback&response_type=code";
  },
  login() {
    return `http://ec2-15-164-119-79.ap-northeast-2.compute.amazonaws.com/api/login/kakao`;
  },
};

export default API;
