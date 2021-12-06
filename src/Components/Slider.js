import React, { Component } from "react";

export default class Slider extends Component {
  constructor() {
    super();

    this.state = {
      satis: 0,
      signal: 0,
    };
  }

  displayPoints() {
    this.setState({
      // satis: x,
      satis: document.getElementById("points").value,
    });
    // var x = document.getElementById("points").value;
    // console.log(x);
  }

  render() {
    return (
      <div>
        <label for="cars">Choose a ISP:</label>

        <select name="isp" id="isp">
          <option value="mobitel">Mobitel</option>
          <option value="dialog">Dialog</option>
          <option value="airtel">Airtel</option>
          <option value="hutch">Hutch</option>
        </select>

        <br />
        <br />

        <label for="points">
          How much are you satisfied (between 0 and 10):
        </label>
        <input type="range" id="points" name="points" min="0" max="10"></input>
        <br />
        <br />
        <label for="points">
          How is the singal in your area? (between 0 and 10):
        </label>
        <input type="range" id="points2" name="points" min="0" max="10"></input>
        <button onClick={() => this.displayPoints()}>Points</button>
        <h1>Point is : {this.state.satis}</h1>
      </div>
    );
  }
}
