const isUndefined = (v: any) => typeof v === "undefined";

const isLogin = (): boolean => !!localStorage.getItem("jwt");

export { isUndefined, isLogin };
