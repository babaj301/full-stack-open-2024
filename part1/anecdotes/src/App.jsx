import { useState } from "react";

const AnecdotePara = ({ anecdotes, selected, text, votes }) => {
  return (
    <div>
      <h1>{text}</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </div>
  );
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const anecdoteLength = anecdotes.length;
  let voteArr = Array(anecdoteLength).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(voteArr);
  const [max, setMax] = useState(0);

  const voteCopy = [...votes];

  const handleVote = () => {
    voteCopy[selected] += 1;
    setVotes(voteCopy);

    let maxNum = Math.max(...voteCopy);
    setMax(voteCopy.indexOf(maxNum));
  };

  const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * anecdoteLength);

    setSelected(randomNumber);
  };

  return (
    <div>
      <AnecdotePara
        anecdotes={anecdotes}
        selected={selected}
        text={"Anecdote of the day"}
        votes={votes}
      />

      <button onClick={handleVote}>vote</button>
      <button onClick={handleRandom}>next anecdote</button>

      <AnecdotePara
        anecdotes={anecdotes}
        selected={max}
        text={"Anecdotes with most votes"}
        votes={votes}
      />
    </div>
  );
};

export default App;
