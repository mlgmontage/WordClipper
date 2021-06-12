import React, { useState } from "react";
import host from "../../host";

/**
 * TODO: Loading screen when new word gets submitted
 */

const Create = () => {
  const [word, setWord] = useState("");
  const [description, setDescription] = useState("");

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const submit = () => {
    if (word !== "" || description !== "") {
      fetch(`${host}/api/words/create`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          word,
          description,
          isCompleted: false,
        }),
      }).then((res) => {
        setDescription("");
        setWord("");
      });
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="row">
          <div className="six columns">
            <label htmlFor="word">
              <strong>Word</strong>
            </label>
            <textarea
              onChange={handleWordChange}
              value={word}
              id="word"
              className="u-full-width input-box"
              style={{ fontSize: 36 + "px", fontWeight: "bold" }}
            ></textarea>
          </div>
          <div className="six columns">
            <label htmlFor="description">
              <strong>Description</strong>
            </label>
            <textarea
              onChange={handleDescriptionChange}
              value={description}
              id="description"
              className="u-full-width input-box"
            ></textarea>
          </div>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <span
            onClick={submit}
            className="fa fa-paperclip"
            style={{ fontSize: 48 + "px", cursor: "pointer" }}
          ></span>
        </div>
      </form>
    </div>
  );
};

export default Create;
