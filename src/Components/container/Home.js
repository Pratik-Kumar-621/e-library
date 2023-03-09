import React, { useEffect, useState } from "react";
import { searchSubjects } from "../../API";
import HomeUI from "../presentational/HomeUI";

const Home = () => {
  const [subjectData, setSubjectData] = useState([]);
  const [input, setInput] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const changeSubject = (e) => {
    e.preventDefault();
    setSubject(input);
  };

  useEffect(() => {
    const fetchSubjectsData = async () => {
      setLoading(true);
      setSubjectData([]);
      const data = await searchSubjects(subject, 10);
      setLoading(false);
      setSubjectData(data);
    };
    fetchSubjectsData();
  }, [subject]);
  console.log(subjectData?.docs?.length);

  const handleClear = () => {
    setInput("");
  };

  return (
    <HomeUI
      {...{
        subjectData,
        input,
        subject,
        changeInput,
        handleClear,
        changeSubject,
        loading,
      }}
    />
  );
};

export default Home;
