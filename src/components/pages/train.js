import React from "react";

const Train = () => (
  <div>
    <div className="row square">
      <div className="six columns">
        <h2 id="train_word">abundant</h2>
      </div>
      <div className="six columns" style={{ fontSize: "18px" }}>
        present in great quantity; more than adequate: an abundant supply of
        water.
      </div>
    </div>
    <div className="row controls" style={{ fontSize: "48px" }}>
      <div className="five columns">
        <span className="fa fa-arrow-left"></span>
      </div>

      <div className="two columns" style={{ textAlign: "center" }}>
        <span className="fa fa-check"></span>
        <br />
        <a className="fa fa-plus" href="./create.html"></a>
      </div>

      <div className="five columns" style={{ textAlign: "right" }}>
        <span className="fa fa-arrow-right"></span>
      </div>
    </div>
  </div>
);

export default Train;
