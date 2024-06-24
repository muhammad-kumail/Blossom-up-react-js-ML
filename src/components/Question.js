import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../components/utils/_var";
import Quiz from "../components/quiz/Quiz";
import quizQuestions from "../api/quizQuestions";
import { QuestionCard } from "../components/utils/Cards";
import Chart from "./result/Chart";

const Wrapper = styled.div`
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.$colorBg};
`;

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      features: [],
      isResult: false,
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  // populate app’s state using the componentWillMount life cycle event
  componentWillMount() {
    const answerOptions = quizQuestions.map((question) => question.answers);
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: answerOptions[0],
    });
  }

  // setting the answer based on the user’s selection
  setUserAnswer(answer) {
    this.setState({
      answer: answer,
      features: [...this.state.features, Number(answer)],
    });
  }

  // increment the counter and questionId state
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
    });
  }

  // setting the answer and then setting the next question
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 800);
    } else {
      setTimeout(() => this.setState({ isResult: true }), 800);
    }
  }
  // ===========================================================================
  //                    functions to render quiz
  // ===========================================================================
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  // ===========================================================================
  //                       render this question page
  // ===========================================================================
  render() {
    if (this.state.isResult) {
      return <Chart features={this.state.features} />;
    }
    return (
      <Wrapper className="container">
        <QuestionCard>
          <div className="corner" />
          <div className="corner" />
          <div className="corner" />
          <div className="corner" />
          {this.renderQuiz()}
        </QuestionCard>
      </Wrapper>
    );
  }
}

export default Question;
