import React, { useState } from "react";
import host from "../../host";
import formInput from "../hooks/formInput";

/**
 * TODO: Loading screen when new word gets submitted
 */

const Create = () => {
  const word = formInput("");
  const description = formInput("");

  const submit = () => {
    if (word !== "" || description !== "") {
      fetch(`${host}/api/words/create`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          word: word.value,
          description: description.value,
          isCompleted: false,
        }),
      }).then((res) => {
        description.setValue("");
        word.setValue("");
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
              {...word.bind}
              value={word.value}
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
              {...description.bind}
              value={description.value}
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
