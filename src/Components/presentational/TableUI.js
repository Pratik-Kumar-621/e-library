import { Table } from "antd";
import React from "react";

const TableUI = ({ subjectData }) => {
  const dataSource = subjectData?.docs?.map((item, ind) => ({
    key: ind,
    title:
      `${item.title ? item.title : ""}` +
      " " +
      `${item.subtitle ? item.subtitle : ""}`,
    author: `${
      item.author_name
        ? item.author_name.map((name) => {
            return ` ${name}`;
          })
        : "- - -"
    }`,
    latest: item.publish_year
      ? item.publish_year[item.publish_year?.length - 1]
      : "- - -",
    first: item.first_publish_year ? item.first_publish_year : "- - -",
  }));
  const tableColumn = [
    {
      title: "Title and Sub TItle",
      dataIndex: "title",
      key: "title",
      width: "30%",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Latest Publish Year",
      dataIndex: "latest",
      key: "latest",
      width: "20%",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.latest - b.latest,
    },
    {
      title: "First Publish Year",
      dataIndex: "first",
      key: "first",
      width: "20%",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.first - b.first,
    },
  ];
  const rowClassName = () => "table-row";

  return (
    <div className="table_data">
      <Table
        className="table_main"
        dataSource={dataSource}
        columns={tableColumn}
        pagination={false}
        rowClassName={rowClassName}
      />
    </div>
  );
};

export default TableUI;
