import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Input, Label } from "./FloatingInput.style";
const FloatingInput = ({
  label,
  disabled,
  isError,
  onChangeCallback,
  placeholder,
  isMandatory = true,
  value,
}) => {
  const onChangeHandler = (e) => {
    e.preventDefault();
    !disabled && onChangeCallback(e.target.value);
  };
  return (
    <Wrapper disabled={disabled} error={isError}>
      <Input
        disabled={disabled}
        onChange={onChangeHandler}
        type="text"
        error={isError}
        placeholder={disabled ? "Please Wait" : placeholder}
        value={value}
      />
      {!disabled && (
        <Label error={isError}>
          {isMandatory && <span style={{ color: "#ff0002" }}>* </span>}
          {label}
        </Label>
      )}
    </Wrapper>
  );
};
FloatingInput.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  isError: PropTypes.bool,
  onChangeCallback: PropTypes.func,
  placeholder: PropTypes.string,
  isMandatory: PropTypes.bool,
  value: PropTypes.string,
};

FloatingInput.defaultProps = {
  label: "input label",
  isError: false,
  placeholder: "",
  onChangeCallback: () => {
    console.log("input changed");
  },
};
export default FloatingInput;
