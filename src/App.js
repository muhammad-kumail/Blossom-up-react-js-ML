import React, { Component } from "react";
import anime from "animejs";
import Intro from "./components/Intro";
import Question from "./components/Question";
import { colors } from "./components/utils/_var";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestion: false,
    };
    this._onStartClick = this._onStartClick.bind(this);
  }

  renderIntro() {
    return (
      <Intro
        _onStartClick={this._onStartClick}
        title="Welcome To Aptitude Test"
      />
    );
  }

  renderQuestion() {
    return <Question />;
  }

  render() {
    let showQuestion = this.state.showQuestion;
    return (
      <div>
        <h1
          style={{
            position: "absolute",
            left: "20px",
            top: "10px",
            color: colors.$colorGold,
            zIndex: 2,
            flexDirection: "row",
          }}
        >
          Edu<span style={{ color: colors.$orange }}>Vision</span>
        </h1>
        <p
          style={{
            position: "absolute",
            bottom: "10px",
            right: "20px",
            zIndex: 2,
          }}
        >
          <h6
            style={{
              color: colors.$colorGold,
              textAlign: "right",
            }}
          >
            Questions approved by:
          </h6>
          <h6
            style={{
              color: colors.$colorGold,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            Marium Raza
          </h6>
          <h6
            style={{
              color: colors.$colorGold,
              textAlign: "right",
            }}
          >
            Clinical Psychologist
          </h6>
        </p>
        {showQuestion ? this.renderQuestion() : this.renderIntro()}
      </div>
    );
    // if (showQuestion) {
    //   return this.renderQuestion()
    // }
    // return this.renderIntro()
  }

  _onStartClick() {
    this.animateOut();
    setTimeout(
      () => this.setState({ showQuestion: !this.state.showQuestion }),
      1000
    );
  }

  animateOut() {
    setTimeout(
      () =>
        anime({
          targets: ".card",
          translateX: "150%",
          elasticity: function (el, i, l) {
            return 200 + i * 200;
          },
        }),
      200
    );
  }
}

export default App;
