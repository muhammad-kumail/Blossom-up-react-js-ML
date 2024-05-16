import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, fonts } from "../utils/_var";

const Wrapper = styled.div`
  .row {
    margin: 1rem 0;
    .col {
      padding: 1rem;
      h1 {
        font-size: 1.3rem;
        font-family: ${fonts.$mainFont};
        text-align: center;
        color: black;
      }
    }
  }
`;

const Question = (props) => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          <h1 style={{ color: colors.$darkBlue }}>{props.content}</h1>
        </div>
      </div>
    </Wrapper>
  );
};

Question.PropTypes = {
  content: PropTypes.string.isRequired,
};

export default Question;
