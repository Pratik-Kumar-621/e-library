import React from "react";

const SubjectDetailUI = (props) => {
  const { subjectName, subData, loading } = props;
  return (
    <div className="subject_detail_main">
      <div className="subject_heading">
        Top 10 Books of <strong>{subjectName.replaceAll("_", " ")}</strong> are:
      </div>
      {loading && <div className="loading_list">Loading Data ...</div>}
      {subData.works && (
        <>
          {subData.works.length !== 0
            ? subData.works.map((item, ind) => {
                return (
                  <div className="book_list" key={ind}>
                    {ind + 1}. {item.title} {item.subtitle && item.subtitle}
                    <strong>({item.first_publish_year})</strong>
                  </div>
                );
              })
            : "No Books found"}
        </>
      )}
    </div>
  );
};

export default SubjectDetailUI;
