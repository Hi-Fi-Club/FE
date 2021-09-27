import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ROUTE } from "util/constants";
import { getTokenAndUserInfo } from "util/dataFetching/auth";
interface getTokenReturn {
  jwtToken: string;
  userInfo: any;
}

const LoginLoadingPage = () => {
  const history = useHistory();
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const [tokenUser, setTokenUser] = useState<getTokenReturn | null>();
  const fetchTokenAndUserInfo = async () => {
    const response = await getTokenAndUserInfo(code);
    setTokenUser(response);
  };

  useEffect(() => {
    fetchTokenAndUserInfo();
  }, [code]);

  useEffect(() => {
    if (!tokenUser) return;
    localStorage.setItem("jwt", tokenUser?.jwtToken);
    tokenUser?.userInfo ? history.push(ROUTE.MAIN) : history.push(ROUTE.USER.INTEREST);
  }, [tokenUser]);

  return <div>'..Loading..'</div>;
};

export default LoginLoadingPage;
