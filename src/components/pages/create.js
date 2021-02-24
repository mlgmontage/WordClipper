import React, { Component } from "react";

class Create extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submit() {
    console.log(this.state.word + this.state.description);
  }

  state = {
    word: "",
    description: "",
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <div className="row">
            <div className="six columns">
              <label htmlFor="word">
                <strong>Word</strong>
              </label>
              <textarea
                onChange={this.handleChange}
                name="word"
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
                onChange={this.handleChange}
                name="description"
                id="description"
                className="u-full-width input-box"
              ></textarea>
            </div>
          </div>
          <div className="row" style={{ textAlign: "center" }}>
            <span
              onClick={this.submit}
              className="fa fa-paperclip"
              style={{ fontSize: 48 + "px", cursor: "pointer" }}
            ></span>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
