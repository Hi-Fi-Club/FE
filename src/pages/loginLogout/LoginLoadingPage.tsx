import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { ROUTE } from "util/constants";
import API from "@/util/dataFetching/API";

const LoginLoadingPage = () => {

  const [isFullUserInfo, setFullUserInfo] = useState(false);
  const getToken = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    console.log(window.location.search, code)
    try {
      const response = await fetch(API.login(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      const login = await response.json();
      console.log(login)
      if (!login.jwtToken) throw login;
      localStorage.setItem("jwt", JSON.stringify(login.jwtToken));

      if (login.userInterests) setFullUserInfo(true); //jwt를 통해 user정보만 받는 API필요. 현재없음 => 회원정보를 로컬 또는 전역상태관리해야하는 상황 또는 JWT유무로 로그인을 확인하지 않고, 모든 신상정보 등록한 후에 JWT등록 또는 로그인완료상태 등록해주기
      console.log(login.userInterests)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <div>'..Loading..'</div>
      {isFullUserInfo ? <Redirect to={ROUTE.MAIN} /> : <Redirect to={ROUTE.USER.INTEREST} />}
    </>
  );
};

export default LoginLoadingPage;
