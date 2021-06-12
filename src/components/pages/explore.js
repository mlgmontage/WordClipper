import React, { useState, useEffect } from "react";
import host from "../../host";

/**
 * TODO: Delete function
 */

const Explore = () => {
  const [data, setData] = useState([{ _id: "", word: "", description: "" }]);

  useEffect(() => {
    fetch(`${host}/api/words`)
      .then((response) => response.json())
      .then((json) => {
        if (json[0] != undefined) {
          setData(json);
        }
      });
  });

  return (
    <div>
      <h2>Explore</h2>
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

export default Explore;
