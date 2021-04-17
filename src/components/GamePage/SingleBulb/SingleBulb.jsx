import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { ReactComponent as BulbSvg } from "../../../media/svgs/bright-light-bulb-svgrepo-com.svg";
import { LightBulb } from "./SingleBulb.style";

const SingleBulb = ({ idx, bulb, on, click, userMode }) => {
  const memizedBulb = useMemo(
    () => (
      <LightBulb
        onClick={() => userMode && click(idx)}
        color={bulb}
        on={on ? 1 : 0}
      >
        <BulbSvg className="bulbSvg" />
      </LightBulb>
    ),
    [idx, bulb, on, click, userMode]
  );
  return memizedBulb;
};

SingleBulb.propTypes = {
  userMode: PropTypes.bool,
  idx: PropTypes.number,
  on: PropTypes.bool,
  bulb: PropTypes.string,
  click: PropTypes.func,
};
export default SingleBulb;
