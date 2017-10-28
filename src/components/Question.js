import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../components/utils/_var'
import Quiz from '../components/quiz/Quiz'
import Results from '../components/result/Results'
import quizQuestions from '../api/quizQuestions'
import { QuestionCard } from '../components/utils/Cards'

const Wrapper = styled.div`
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.$colorBg};
`

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Colors: {
          Green: 10,
          Brown: 10,
          Blue: 10,
          Red: 10
        },
        Letters: {
          A: 10,
          B: 10,
          C: 10,
          D: 10
        },
        Briggs: {
          EI: 10,
          SN: 10,
          TF: 10,
          JP: 10
        }
      },
      resultBriggs: '',
      resultColors: '',
      resultLetters: ''
    }
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
  } // end - constructor()

  // populate app’s state using the componentWillMount life cycle event
  componentWillMount() {
    const answerOptions = quizQuestions.map(question => question.answers)
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: answerOptions[0]
    })
  } // end - componentWillMount()

  // Setting the answer based on the user’s selection
  setUserAnswer(answer) {
    const answersCount = this.state.answersCount
    let applyAnswer = answer => {
      const answer_array = answer.split(',')
      let briggsAnswer = answer_array[0]
      let colorsAnswer = answer_array[1]
      let lettersAnswer = answer_array[2]
      if (answer_array.length === 3) {
        answersCount['Briggs'][briggsAnswer] += 1
        answersCount['Colors'][colorsAnswer] += 1
        answersCount['Letters'][lettersAnswer] += 1
      } else if (answer_array.length === 4) {
        answersCount['Briggs'][briggsAnswer] -= 1
        answersCount['Colors'][colorsAnswer] -= 1
        answersCount['Letters'][lettersAnswer] -= 1
      }
      return answersCount
    }
    this.setState({
      answersCount: applyAnswer(answer),
      answer: answer
    })
  } // setUserAnswer

  // increment the counter and questionId state
  setNextQuestion() {
    const counter = this.state.counter + 1
    const questionId = this.state.questionId + 1
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    })
  } // setNextQuestion()

  // setting the answer and then setting the next question
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value)
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 800)
    } else {
      setTimeout(() => this.setResults(this.getColorsResults(), this.getLettersResults(), this.getBriggsResults()), 800)
    }
  }

  // ===========================================================================
  //                        get results
  // ===========================================================================
  getBriggsResults() {
    const answersCount = this.state.answersCount
    const briggsAnswer = answersCount['Briggs']
    const answersCountKeysBriggs = Object.keys(briggsAnswer)
    const answersCountValuesBriggs = answersCountKeysBriggs.map(key => briggsAnswer[key])
    const maxAnswerCountBriggs = Math.max.apply(null, answersCountValuesBriggs)
    return answersCountKeysBriggs.filter(key => briggsAnswer[key] === maxAnswerCountBriggs)
  }

  getColorsResults() {
    const answersCount = this.state.answersCount
    const colorsAnswer = answersCount['Colors']
    const answersCountKeysColors = Object.keys(colorsAnswer)
    const answersCountValuesColors = answersCountKeysColors.map(key => colorsAnswer[key])
    const maxAnswerCountColors = Math.max.apply(null, answersCountValuesColors)
    return answersCountKeysColors.filter(key => colorsAnswer[key] === maxAnswerCountColors)
  }

  getLettersResults() {
    const answersCount = this.state.answersCount
    const lettersAnswer = answersCount['Letters']
    const answersCountKeysLetters = Object.keys(lettersAnswer)
    const answersCountValuesLetters = answersCountKeysLetters.map(key => lettersAnswer[key])
    const maxAnswerCountLetters = Math.max.apply(null, answersCountValuesLetters)
    return answersCountKeysLetters.filter(key => lettersAnswer[key] === maxAnswerCountLetters)
  }

  // ===========================================================================
  //                        set results
  // ===========================================================================
  setResults(resultColors, resultLetters, resultBriggs) {
    if (resultColors.length >= 1) {
      this.setState({ resultColors: resultColors[0] })
    }
    if (resultLetters.length >= 1) {
      this.setState({ resultLetters: resultLetters[0] })
    }
    if (resultBriggs.length >= 1) {
      this.setState({ resultBriggs: resultBriggs[0] })
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
    )
  }

  // ===========================================================================
  //                    functions to render result
  // ===========================================================================
  renderResult() {
    return (
      <Results
        resultColors={this.state.resultColors}
        resultLetters={this.state.resultLetters}
        resultBriggs={this.state.resultBriggs}
      />
    )
  }

  // ===========================================================================
  //                       render this question page
  // ===========================================================================
  render() {
    let resultBriggs = this.state.resultBriggs
    if (resultBriggs) {
      return this.renderResult()
    } else {
      this.renderQuiz()
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
    )
  }
}

export default Question
