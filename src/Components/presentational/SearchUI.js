import React from "react";
import { Button, Input } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import TableUI from "./TableUI";
const SearchUI = (props) => {
  const {
    subjectData,
    input,
    handleClear,
    changeInput,
    changeSubject,
    loading,
    onNextClick,
    onPrevClick,
    numberOfPages,
    offset,
    subject,
  } = props;
  return (
    <div className="search_books">
      <div className="input_search">
        <form onSubmit={changeSubject}>
          <Input
            size="large"
            className="input_search_box"
            value={input}
            onChange={changeInput}
            placeholder="Search Book By Titles or By Authors"
          />
          <Button size="large" htmlType="submit" icon={<SearchOutlined />} />
        </form>
        {input && (
          <Button
            type="primary"
            className="clear_button"
            onClick={handleClear}
            icon={<CloseOutlined />}
          />
        )}
      </div>

      {subjectData?.docs?.length !== 0 ? (
        <div className="books_details">
          {subject && (
            <div className="results">
              Search Results for{" "}
              <strong>"{subject.replaceAll("+", " ")}"</strong>
            </div>
          )}
          {loading && <div className="loading_list">Loading Data ...</div>}
          {subjectData.docs && <TableUI {...{ subjectData }} />}
          {numberOfPages !== 0 && (
            <div className="buttons">
              <Button
                onClick={onPrevClick}
                disabled={offset === 0 ? true : false}
              >
                Prev
              </Button>
              <div className="number_of_pages">
                Page no. <strong>{offset + 1}</strong>
              </div>

              <Button
                onClick={onNextClick}
                disabled={offset === numberOfPages - 1 ? true : false}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="not_searched_any">
          Please search books by author name or title.
        </div>
      )}
    </div>
  );
};

export default SearchUI;
