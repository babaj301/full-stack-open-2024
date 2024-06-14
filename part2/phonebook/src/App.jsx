import { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import PersonDisplay from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [input, setInput] = useState("");

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

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter input={input} handleInput={handleInput} />

      <h3>Add a new</h3>

      <Form
        onSubmit={onSubmit}
        newName={newName}
        handleName={handleName}
        newNumber={newNumber}
        handleNumber={handleNumber}
      />
      <h3>Numbers</h3>

      <PersonDisplay key={persons.name} filtered={filtered} />
    </div>
  );
};

export default App;
