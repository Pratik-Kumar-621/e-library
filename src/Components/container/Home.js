import React, { useEffect, useState } from "react";
import { searchSubjects } from "../../API";
import HomeUI from "../presentational/HomeUI";

const Home = () => {
  const [subjectData, setSubjectData] = useState([]);
  const [input, setInput] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [numberOfPages, setnumberOfPages] = useState(0);

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const changeSubject = (e) => {
    e.preventDefault();
    setOffset(0);
    const words = input.trim().split(" ");
    const searchQuery = words.map((word) => encodeURIComponent(word)).join("+");
    setSubject(searchQuery);
  };

  useEffect(() => {
    const fetchSubjectsData = async () => {
      setLoading(true);
      setSubjectData([]);
      const data = await searchSubjects(subject, 10, offset);
      setnumberOfPages(parseInt((data.numFound + 9) / 10));
      setLoading(false);
      setSubjectData(data);
    };
    fetchSubjectsData();
  }, [subject, offset]);
  console.log(subjectData);
  console.log(numberOfPages);
  const onNextClick = () => {
    setOffset(offset + 1);
  };
  const onPrevClick = () => {
    setOffset(offset - 1);
  };

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
        onNextClick,
        onPrevClick,
        numberOfPages,
        offset,
      }}
    />
  );
};

export default Home;
