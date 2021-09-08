import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import API from "util/API";

const LoginLoadingPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const getToken = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    console.log(`code: ${code}`);
    const login = await fetch(API.login(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });
    const res = await login.json();
    localStorage.setItem("user", JSON.stringify(res));
    setIsLogin(true);
  };

  useEffect(() => {
    getToken();
  }, []);

  return <>{isLogin ? <Redirect to="/main" /> : <div>loading...</div>}</>;
};

export default LoginLoadingPage;
