import API from "@/util/dataFetching/API";
interface getTokenReturn {
  jwtToken: string;
  userInfo: any; //잠시 쓰겠습니다. 응답형태를 아직파악못했음.
}

export const getTokenAndUserInfo = async (code: string | null): Promise<getTokenReturn | null> => {
  if (!code) return null;
  try {
    const response = await fetch(API.login(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });
    const login = await response.json();
    if (!login.jwtToken) throw Error;
    return { jwtToken: login.jwtToken, userInfo: login.userInterests };
  } catch (err) {
    console.error(err);
    return null;
  }
};
