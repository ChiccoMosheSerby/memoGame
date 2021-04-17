import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { StyledApp } from "./MemoGame.style";

function MemoGame() {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isLogged = userName !== "";

  return (
    <StyledApp bg={isLogged}>
      <Header isLogged={isLogged} userName={userName} />
      <Content
        userName={userName}
        isLogged={isLogged}
        setIsLoading={setIsLoading}
        setUserName={setUserName}
        isLoading={isLoading}
      />
      <Footer isLogged={isLogged} setUserName={setUserName} />
    </StyledApp>
  );
}

export default MemoGame;
