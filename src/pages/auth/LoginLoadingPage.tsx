import { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { ROUTE } from "util/constants";
import API from "@/util/dataFetching/API";

const LoginLoadingPage = () => {
  const history = useHistory()
  const getToken = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code")

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
      localStorage.setItem("jwt",login.jwtToken);

      (login.userInterests)?history.push(ROUTE.MAIN):history.push(ROUTE.USER.INTEREST) 
      //jwt를 통해 user정보만 받는 API필요. 현재없음 => 회원정보를 로컬 또는 전역상태관리해야하는 상황 또는 JWT유무로 로그인을 확인하지 않고, 모든 신상정보 등록한 후에 JWT등록 또는 로그인완료상태 등록해주기

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
   
    </>
  );
};

export default LoginLoadingPage;
