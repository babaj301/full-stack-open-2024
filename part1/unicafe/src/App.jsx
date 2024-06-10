import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticsLine = ({ text, value, text2 }) => {
  return (
    <>
      <td>
        {text} {value} {text2}
      </td>
    </>
  );
};

const Statistics = ({ good, neutral, bad, all }) => {
  if (good || neutral || bad || all) {
    return (
      <div>
        <h1>Statistics</h1>

        <table>
          <tbody>
            <tr>
              <StatisticsLine text={"good"} value={good} />
            </tr>

            <tr>
              <StatisticsLine text={"neutral"} value={neutral} />
            </tr>
            <tr>
              <StatisticsLine text={"bad"} value={bad} />
            </tr>

            <tr>
              <StatisticsLine text={"all"} value={all} />
            </tr>
            <tr>
              <StatisticsLine text={"average"} value={(good - bad) / all} />
            </tr>

            <tr>
              <StatisticsLine
                text={"positive"}
                value={(good / all) * 100}
                text2={"%"}
              />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    const newGood = good + 1;
    setGood(newGood);
    console.log("good", newGood);
    setAll(newGood + bad + neutral);
  };

  const handleNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    console.log("neutral", newNeutral);
    setAll(newNeutral + good + bad);
  };

  const handleBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
    console.log("bad", newBad);
    setAll(newBad + good + neutral);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text={"good"} />
      <Button onClick={handleNeutral} text={"neutral"} />
      <Button onClick={handleBad} text={"bad"} />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} />
    </div>
  );
};

export default App;
