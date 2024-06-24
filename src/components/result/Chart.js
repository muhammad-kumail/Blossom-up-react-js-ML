import React, { Component, useEffect, useState } from "react";
import { Wrapper } from "../utils/ResultWrapper";
//@ts-ignore
import { SkillChart } from "../defaults/SkillChart";

export default function Chart(props) {
  const [predictions, setPredictions] = useState([]);
  const [data, setData] = useState([]);
  const barValue = (val) => {
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
  };
  useEffect(() => {
    fetch("http://0.0.0.0:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ features: [props.features] }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("🚀 ~ Chart ~ fetch ~ res.data:", data);
        setPredictions(data.predictions[0]);
      })
      .catch((err) => {
        console.log("🚀 ~ Chart ~ fetch ~ err.message:", err.message);
      });
  }, []);
  useEffect(() => {
    if (predictions.length > 0) {
      setData([
        {
          name: "Analytical",
          Skill: barValue(predictions[0]),
        },
        {
          name: "Technical",
          Skill: barValue(predictions[1]),
        },
        {
          name: "Organizational",
          Skill: barValue(predictions[2]),
        },
        {
          name: "Learn Skill",
          Interest: barValue(predictions[4]),
        },
        {
          name: "Technology",
          Interest: barValue(predictions[3]),
        },
      ]);
    }
  }, [predictions]);
  return (
    <Wrapper className="jumbotron">
      <br />
      <h1 className="display-3 title">Result</h1>
      <hr className="my-4" />
      <hr className="my-5" />
      <center>
        <SkillChart data={data} />
      </center>
      <div className="list-group"></div>
    </Wrapper>
  );
}
