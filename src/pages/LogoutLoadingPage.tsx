import { ROUTE } from "@/util/constants";
import { useState, useEffect } from "react";
import { Redirect } from "react-router";

const LogoutLoadingPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const removeToken = () => {
    localStorage.removeItem("jwt");
    setIsLogin(false);
  };

  useEffect(() => {
    removeToken();
  }, []);

  return (
    <>
      <h1>로그아웃 하는중..</h1>
      {!isLogin && <Redirect to={ROUTE.ENTER} />}
    </>
  );
};

export default LogoutLoadingPage;
