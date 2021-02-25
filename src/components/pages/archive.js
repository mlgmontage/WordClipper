import React, { Component } from "react";
import host from "../../host";

class Archive extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: [{ _id: "", word: "", description: "" }],
  };

  componentDidMount() {
    fetch(`${host}/api/words/archive`)
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          this.setState({ data: json });
        }
      });
  }

  render() {
    return (
      <div>
        <h2>Archive</h2>
        {this.state.data.map((item) => (
          <div key={item._id}>
            <h4>{item.word}</h4>
            <div>{item.description}</div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Archive;
