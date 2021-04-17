import React from "react";
import GamePage from "../GamePage/GamePage";
import WelcomePage from "../WelcomePage/WelcomePage";

const Content = ({ isLogged, setIsLoading, setUserName, isLoading,userName }) => {
  return (
    <div className="content">
      {isLogged ? (
        <GamePage userName={userName}/>
      ) : (
        <WelcomePage
          setIsLoading={(bool) => setIsLoading(bool)}
          setUserName={(name) => setUserName(name)}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
export default Content;
