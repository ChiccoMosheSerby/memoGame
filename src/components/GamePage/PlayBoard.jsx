import React from "react";
import { colors, notes } from "../../data/color_note";
import SingleBulb from "./SingleBulb/SingleBulb";

const PlayBoard = ({ selectedColor, click, userMode }) => {
  return colors?.map((bulb, idx) => {
    const on = selectedColor === bulb;
    return (
      <SingleBulb
        key={idx}
        note={notes[idx]}
        bulb={bulb}
        idx={idx}
        on={on}
        click={click}
        userMode={userMode}
      />
    );
  });
};
export default PlayBoard;
