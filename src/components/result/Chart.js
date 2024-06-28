import React, { Component } from "react";
import { Wrapper } from "../utils/ResultWrapper";
//@ts-ignore
import { SkillChart } from "../defaults/SkillChart";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      predictions: [],
      data: [],
    };
  }

  barValue(val) {
    switch (val) {
      case 0:
        return 2;
      case 1:
        return 4;
      case 2:
        return 6;
      default:
        return 0;
    }
  }

  componentDidMount() {
    fetch("http://0.0.0.0:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ features: [this.props.features] }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("🚀 ~ Chart ~ fetch ~ res.data:", data);
        this.setState({ predictions: data.predictions[0] });
      })
      .catch((err) => {
        console.log("🚀 ~ Chart ~ fetch ~ err.message:", err.message);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.predictions !== this.state.predictions) {
      const { predictions } = this.state;
      if (predictions.length > 0) {
        this.setState({
          data: [
            {
              name: "Analytical",
              Skill: this.barValue(predictions[0]),
            },
            {
              name: "Technical",
              Skill: this.barValue(predictions[1]),
            },
            {
              name: "Organizational",
              Skill: this.barValue(predictions[2]),
            },
            {
              name: "Learn Skill",
              Interest: this.barValue(predictions[4]),
            },
            {
              name: "Technology",
              Interest: this.barValue(predictions[3]),
            },
          ],
        });
      }
    }
  }

  render() {
    return (
      <Wrapper className="jumbotron">
        <br />
        <h1 className="display-3 title">Result</h1>
        <hr className="my-4" />
        <hr className="my-5" />
        <center>
          <SkillChart data={this.state.data} />
        </center>
        <div className="list-group"></div>
      </Wrapper>
    );
  }
}

export default Chart;