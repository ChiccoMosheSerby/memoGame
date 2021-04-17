import React from "react";
import PropTypes from "prop-types";

import { Top, Sound } from "../GamePage.style";

const TopInfo = ({ bestScore, currentScore, noSound, toggleSound }) => {
  const src = !noSound
    ? "https://static.thenounproject.com/png/5055-200.png"
    : "https://static.thenounproject.com/png/45313-200.png";
  return (
    <Top>
      <div>
        <div>Best</div> <div>{bestScore}</div>
      </div>
      <Sound noSound={noSound} src={src} onClick={toggleSound} />
      <div>
        <div>Current</div>
        <div>{currentScore}</div>
      </div>
    </Top>
  );
};

TopInfo.propTypes = {
  bestScore: PropTypes.number,
  currentScore: PropTypes.number,
};

export default TopInfo;
