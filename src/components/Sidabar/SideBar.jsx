import React, { useState } from "react";
import { Toggle, Sidebar, Top, List } from "./style";

const SideBar = ({ userName }) => {
  const [open, setOpen] = useState(false);
  const bestScore = JSON.parse(localStorage.getItem("bestScore"));
  let newHistory = JSON.parse(localStorage.getItem("history"));
  if (newHistory === null) {
    newHistory = [{ score: null, currentTime: null, userName: null }];
  }
  return (
    <>
      <Toggle open={open} onClick={() => setOpen((prev) => !prev)}>
        {open ? "Close" : "Open"}
      </Toggle>
      <Sidebar open={open}>
        <Top head>
          <div>Hi {userName} </div>
        </Top>
        <Top head>
          <div>Best Scroe {bestScore}</div>
        </Top>
        <Top>
          <div>name</div>
          <div>time</div>
          <div>score</div>
        </Top>
        <List>
          {newHistory.map((item, index) => {
            const trheBest = index === 0;
            return (
              <div
                className="row"
                key={index}
                className={trheBest ? "row best" : "row"}
              >
                <div className="user"> {item.userName}</div>
                <div className="time"> {item.currentTime}</div>
                <div className="score">{item.score}</div>
              </div>
            );
          })}
        </List>
      </Sidebar>
    </>
  );
};

export default SideBar;
