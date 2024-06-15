import React from "react";
import Link from "next/link";

const MainMenu = () => {
  return (
    <di>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/newarticles">news</Link>
      <Link href="/contactus">contact</Link>
    </di>
  );
};

export default MainMenu;
