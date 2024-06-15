"use client";
import { createContext, usestate } from "react";

export default function Home() {
  const [userinfo, setUserinfo] = usestate({
    name: "mohammad",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    admin: false,
    hash: "",
  });
  const maincontext = createContext(userinfo);

  return (
    <maincontext.Provider value={userinfo}>hello world</maincontext.Provider>
  );
}
export const useAuth = () => {
  return useContext(AuthContext);
};
