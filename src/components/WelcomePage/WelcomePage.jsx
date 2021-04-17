import React, { useState } from "react";
import PropTypes from "prop-types";

import FloatingInput from "./FloatingInput/FloatingInput";
import CircleLoader from "./Loader/CircleLoader";
import { Form, SubmitButton } from "./WelcomePage.style";

const HelloPage = ({ isLoading = false, setUserName, setIsLoading }) => {
  const [inputData, setInputData] = useState("");
  const [isError, setIsError] = useState(false);
  
  const inputHandler = (data) => {
    setInputData(data);
  };

  const submit = (e) => {
    e.preventDefault();
    if (inputData === "") {
      setIsError(true);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setUserName(inputData);
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <Form onSubmit={submit}>
      <FloatingInput
        label="Name"
        disabled={isLoading}
        isError={isError}
        onChangeCallback={(data) => inputHandler(data)}
        placeholder={isError ? "Name is mandatory" : "Please Enter Your Name"}
        isMandatory
        value={inputData}
      />
      <SubmitButton type="submit" isLoading={isLoading}>
        {!isLoading ? <div>Start</div> : <CircleLoader loaderSize={6} />}
      </SubmitButton>
    </Form>
  );
};
HelloPage.propTypes = {
  isLoading: PropTypes.bool,
  setUserName: PropTypes.func,
  setIsLoading: PropTypes.func,
};

export default HelloPage;
