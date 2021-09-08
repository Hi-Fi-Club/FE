const isUndefined = (v: any) => typeof v === "undefined";

const isLogin = (): boolean => !!localStorage.getItem("user");

export { isUndefined, isLogin };
