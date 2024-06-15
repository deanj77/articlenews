"use client";
import { useState, useEffect } from "react";

const page = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const handleUsernameChange = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`my name is :${user.username},and my password is: ${user.password}`);
    // Add your login logic here
  };

  return (
    <form
      className="flex flex-col justify-center items-center mt-50"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="username"
        value={user.username}
        onChange={handleUsernameChange}
      />
      <input
        type="text"
        placeholder="password"
        value={user.password}
        onChange={handlePasswordChange}
      />
      <div>
        <label>remember me</label>
        <input type="checkbox" id="remember" />
      </div>
      <div>
        <button>sign up</button>
      </div>
    </form>
  );
};

export default page;
