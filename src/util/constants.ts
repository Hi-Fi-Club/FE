export const ROUTE = {
  ENTER: "/",
  LOGIN: "/login",
  MAIN: "/main",
  USER: {
    INTEREST: "/user/interest",
    LOCATION: "/user/location",
  },
  OAUTH_LOGIN: "/oauth/kakao/callback",
  OAUTH_LOGOUT: "/oauth/kakao/logout",
};

// 이 부분도 컴포넌트에 따라 분리할까 생각중..
export const TARGET_COUNT = 2;
export const INIT_INDEX = -1;
export const MAX_SELECT_NUM = 5;