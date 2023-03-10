import { Button, Input } from "antd";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SubjectUI = () => {
  const history = useHistory();
  const [input, setInput] = useState("");

  // list of trending books
  const trendingBooks = [
    {
      name: "JavaScript",
      link: "javascript",
    },
    {
      name: "Harry Potter",
      link: "harry_potter",
    },
    {
      name: "Indian History",
      link: "indian_history",
    },
    {
      name: "Crypto Currency",
      link: "crypto_currency",
    },
    {
      name: "Criminal Law",
      link: "criminal_law",
    },
  ];
  return (
    <div className="home_subjects">
      <div className="subject_heading">Trending Subjects</div>
      <form
        onSubmit={() =>
          history.push(input.replaceAll(" ", "_").toLocaleLowerCase())
        }
      >
        <Input
          size="large"
          placeholder="Search Subjects"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div className="subject_lists">
        {trendingBooks
          .filter((i) =>
            i.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
          )
          .map((item, ind) => {
            return (
              <Link className="link_book" to={`/${item.link}`} key={ind}>
                <Button type="text">{item.name}</Button>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SubjectUI;
