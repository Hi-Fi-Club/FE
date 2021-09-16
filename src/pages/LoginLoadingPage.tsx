import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { ROUTE } from "util/constants";
import API from "util/API";

const LoginLoadingPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const getToken = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    console.log(`code: ${code}`);
    try {
      const login = await fetch(API.login(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      const res = await login.json();
      if (res.status !== 200) throw res.status;
      localStorage.setItem("user", JSON.stringify(res));
      setIsLogin(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <>{isLogin ? <Redirect to={ROUTE.MAIN} /> : <div>loading...</div>}</>;
};

export default LoginLoadingPage;
