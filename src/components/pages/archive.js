import React, { useState, useEffect } from "react";
import host from "../../host";

/**
 * TODO: Delete & Restore function
 */

const Archive = () => {
  const [data, setData] = useState([{ _id: "", word: "", description: "" }]);

  useEffect(() => {
    fetch(`${host}/api/words/archive`)
      .then((response) => response.json())
      .then((json) => {
        if (json[0] != undefined) {
          setData(json);
        }
      });
  }, []);

  return (
    <div>
      <h2>Archive</h2>
      {data.map((item) => (
        <div key={item._id}>
          <h4>{item.word}</h4>
          <div>{item.description}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Archive;
