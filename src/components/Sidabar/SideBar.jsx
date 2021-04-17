import React, { useState } from "react";
import { Toggle, Sidebar, Top, List } from "./style";

const SideBar = ({ array, userName }) => {
  const [open, setOpen] = useState(false);
  const bestScore = localStorage.getItem("bestScore");
  let newHistory = JSON.parse(localStorage.getItem("history"));
  if (newHistory === null) {
    newHistory = [{ score: 0, currentTime: null }];
  }
  return (
    <>
      <Toggle open={open} onClick={() => setOpen((prev) => !prev)}>
        {open ? "Close X" : "Open"}
      </Toggle>
      <Sidebar open={open}>
        <Top head>
          <div>{userName}</div>
          <div>{bestScore}</div>
        </Top>
        <Top>
          <div>time</div>
          <div>score</div>
        </Top>
        <List>
          {newHistory.map((item, index) => {
            return (
              <div className="row" key={index}>
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
