import React, { Component } from "react";
import host from "../../host";

/**
 * TODO: Delete function
 */

class Explore extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: [{ _id: "", word: "", description: "" }],
  };

  componentDidMount() {
    fetch(`${host}/api/words`)
      .then((response) => response.json())
      .then((json) => {
        if (json[0] != undefined) {
          this.setState({ data: json });
        }
      });
  }

  render() {
    return (
      <div>
        <h2>Explore</h2>
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

export default Explore;
