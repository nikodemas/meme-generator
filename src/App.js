import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
	  file: null
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleClick = event => {
    this.setState({ file: URL.createObjectURL(event.target.files[0])});
  };
  
  render() {
    return (
      <div>
		<div className="upload">
		<input
			type="file"
			onChange={this.handleClick}
		 />
		 </div>
		 <div className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="top text"
            onChange={this.handleChange}
            value={this.state.topText}
          />
          <br />
          <input
            type="text"
            name="bottomText"
            placeholder="bottom text"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />
          <br />
        </div>
        <div className="meme">
          <h2
            className="top"
          >
            {this.state.topText}
          </h2>
          <img src={this.state.file} alt="" />
          <h2
            className="bottom"
          >
            {this.state.bottomText}
          </h2>
        </div>
      </div>
    );
  }
}

export default App;