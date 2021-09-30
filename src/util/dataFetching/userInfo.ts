import API from "util/dataFetching/API";

export const getUsesrInfo = async () => {
  //jwt토큰으로 회원정보만 받을 수 있는 api ?
};

export const getMainInterests = async () => {
  try {
    const token = localStorage.getItem("jwt");
    const header = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(API.USERINFO.MAIN_INTERESTS(), header);
    if (response.status !== 200) throw Error;
    return response.json();
  } catch (err) {
    console.log(err); //에러처리 제대로하기
    return [];
  }
};
export const getDetailInterests = async (mainId: number) => {
  try {
    const token = localStorage.getItem("jwt");
    const header = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(API.USERINFO.DETAIL_INTERESTS(mainId), header);
    if (response.status !== 200) throw Error;
    return response.json();
  } catch (err) {
    console.log(err); //에러처리 제대로하기
    return [];
  }
};
