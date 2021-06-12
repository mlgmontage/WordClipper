import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import host from "../../host";

const Train = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([
    {
      _id: "",
      word: "",
      description: "",
    },
  ]);

  useEffect(() => {
    fetch(`${host}/api/words`)
      .then((response) => response.json())
      .then((json) => {
        if (json[0] != undefined) {
          setData(json);
        }
      });
    document.addEventListener("keypress", keyhandler);

    return () => {
      document.removeEventListener("keypress", keyhandler);
    };
  }, []);

  const complete = (id) => {
    fetch(`${host}/api/words/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ isCompleted: true }),
    })
      .then((response) => response.json())
      .then(() => console.log("completed"));
  };

  const keyhandler = (event) => {
    if (event.key == "j") {
      previous();
    }
    if (event.key == "l") {
      next();
    }
  };

  const previous = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const next = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <div className="row square">
        <h6>Counter: {index + 1}</h6>
        <h2>{data[index].word}</h2>
        <div style={{ fontSize: "18px" }}>{data[index].description}</div>
      </div>
      <div className="row controls" style={{ fontSize: "48px" }}>
        <div onClick={previous} className="five columns">
          <span className="fa fa-arrow-left"></span>
        </div>

        <div className="two columns" style={{ textAlign: "center" }}>
          <span
            onClick={() => complete(data[index]._id)}
            className="fa fa-check"
          ></span>
          <br />
          <Link className="fa fa-plus" to="/create"></Link>
        </div>

        <div
          onClick={next}
          className="five columns"
          style={{ textAlign: "right" }}
        >
          <span className="fa fa-arrow-right"></span>
        </div>
      </div>
    </div>
  );
};

export default Train;
