import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSubjects } from "../../API/index";
import SubjectDetailUI from "../presentational/SubjectDetailUI";

const Subject = () => {
  const params = useParams();
  const subjectName = params.subjectName;

  const [subData, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData([]);
      const data = await getSubjects(subjectName);
      setLoading(false);
      setData(data);
    };
    fetchData();
  }, [subjectName]);

  console.log("subData", subData);
  return (
    <SubjectDetailUI
      {...{
        subjectName,
        subData,
        loading,
      }}
    />
  );
};

export default Subject;
