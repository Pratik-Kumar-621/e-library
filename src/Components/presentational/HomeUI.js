import React from "react";

import SearchUI from "./SearchUI";
import SubjectUI from "./SubjectUI";

const HomeUI = (props) => {
  const {
    subjectData,
    input,
    handleClear,
    subject,
    changeInput,
    changeSubject,
    loading,
    onNextClick,
    onPrevClick,
    numberOfPages,
    offset,
  } = props;

  return (
    <div className="home_main">
      <SubjectUI />
      <SearchUI
        {...{
          subjectData,
          input,
          handleClear,
          subject,
          changeInput,
          changeSubject,
          loading,
          onNextClick,
          onPrevClick,
          numberOfPages,
          offset,
          subject,
        }}
      />
    </div>
  );
};

export default HomeUI;
