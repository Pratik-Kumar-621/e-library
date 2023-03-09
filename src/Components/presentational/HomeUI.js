import React from "react";
import { Button, Input } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";

const HomeUI = (props) => {
  const {
    subjectData,
    input,
    handleClear,
    subject,
    changeInput,
    changeSubject,
    loading,
  } = props;
  return (
    <div>
      <div className="input_search">
        <form onSubmit={changeSubject}>
          <Input
            className="input_search_box"
            value={input}
            onChange={changeInput}
            placeholder="Search Book By Titles or By Authors"
          />
          <Button htmlType="submit" icon={<SearchOutlined />} />
        </form>
        {input && (
          <Button
            type="primary"
            className="clear_button"
            icon={<CloseOutlined />}
            shape="circle"
          />
        )}
      </div>

      {loading && "Loading ..."}
      {subjectData && (
        <>
          {subjectData?.docs?.map((i) => {
            return (
              <div>
                {i.title} {i.subtitle}
                {i?.author_name?.map((name) => (
                  <div>{name}</div>
                ))}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default HomeUI;
