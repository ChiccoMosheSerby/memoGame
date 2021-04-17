import React from "react";
import { Loguot } from "./MemoGame.style";

const Footer = ({ isLogged, setUserName }) => {
  return (
    <div className="footer">
      {isLogged ? (
        <Loguot onClick={() => setUserName("")}>Logout</Loguot>
      ) : (
        "useMemo GAME"
      )}
    </div>
  );
};
export default Footer;
