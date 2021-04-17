import React from "react";
import { Head } from "./MemoGame.style";

const Header = ({ isLogged, userName }) => {
  return (
    <div className="head">
      <Head>{isLogged ? <span>Hello {userName}</span> : "WELCOME"} </Head>
    </div>
  );
};

export default Header;
