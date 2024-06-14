import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [input, setInput] = useState("Arto");

  const onSubmit = (event) => {
    event.preventDefault();

    const newObject = { name: newName, number: newNumber };
    const exists = (value) => value.name === newObject.name;
    const bool = persons.some(exists);

    if (bool) {
      alert(`${newName} is already added to the phonebook`);
      setNewName("");
    } else {
      setPersons(persons.concat(newObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const filtered = persons.filter((person) => {
    return person.name.toLowerCase().includes(input.toLowerCase());
  });

  console.log(filtered);

  const handleName = (event) => {
    setNewName(event.target.value);
  };
  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const DisplayForm = ({ persons, filtered }) => {
    return (
      <div>
        {filtered.map((person) => {
          return (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={input} onChange={handleInput} />
      </div>
      <form onSubmit={onSubmit}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <DisplayForm key={persons.name} persons={persons} filtered={filtered} />
    </div>
  );
};

export default App;
