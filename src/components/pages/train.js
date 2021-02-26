import React, { Component } from "react";
import { Link } from "react-router-dom";
import host from "../../host";

class Train extends Component {
  constructor(props) {
    super(props);
    this.keyhandler = this.keyhandler.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.complete = this.complete.bind(this);
  }

  componentDidMount() {
    /**
     * * I can't use async/await syntax
     */
    fetch(`${host}/api/words`)
      .then((response) => response.json())
      .then((json) => {
        if (json[0] != undefined) {
          this.setState({ data: json });
        }
      });
    document.addEventListener("keypress", this.keyhandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.keyhandler);
  }

  complete(id) {
    fetch(`${host}/api/words/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ isCompleted: true }),
    })
      .then((response) => response.json())
      .then(() => console.log("completed"));
  }

  keyhandler(event) {
    if (event.key == "j") {
      this.previous();
    }
    if (event.key == "l") {
      this.next();
    }
  }

  previous() {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      });
    }
  }

  next() {
    if (this.state.index < this.state.data.length - 1) {
      this.setState({
        index: this.state.index + 1,
      });
    }
  }

  state = {
    index: 0,
    data: [
      {
        _id: "",
        word: "",
        description: "",
      },
    ],
  };

  render() {
    return (
      <div>
        <div className="row square">
          <h6>Counter: {this.state.index + 1}</h6>
          <h2>{this.state.data[this.state.index].word}</h2>
          <div style={{ fontSize: "18px" }}>
            {this.state.data[this.state.index].description}
          </div>
        </div>
        <div className="row controls" style={{ fontSize: "48px" }}>
          <div onClick={this.previous} className="five columns">
            <span className="fa fa-arrow-left"></span>
          </div>

          <div className="two columns" style={{ textAlign: "center" }}>
            <span
              onClick={() =>
                this.complete(this.state.data[this.state.index]._id)
              }
              className="fa fa-check"
            ></span>
            <br />
            <Link className="fa fa-plus" to="/create"></Link>
          </div>

          <div
            onClick={this.next}
            className="five columns"
            style={{ textAlign: "right" }}
          >
            <span className="fa fa-arrow-right"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Train;
