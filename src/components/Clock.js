import react from "react";
import Button from "./Button";

class Clock extends react.Component {
  state = {
    date: new Date(),
    local: "bn-BD",
  };

  componentDidMount() {
    this.tickClear = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handelLang = (local) => {
    this.setState({
      local,
    });
  };

  componentWillUnmount() {
    clearInterval(this.tickClear);
  }

  render() {
    console.log("Clock component Called");
    return (
      <div className="clock">
        <div>
          {" "}
          <h1>Hello World</h1>{" "}
          {this.state.date.toLocaleTimeString(this.state.local)}
        </div>
        <br />
        <Button change={this.handelLang} local="en-US" btncopy="Click to See English Time" />
        <Button change={this.handelLang} local="bn-BD" btncopy="Click to See Bangla Time" />
      </div>
    );
  }
}

export default Clock;
