import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import PersonDisplay from "./components/Persons";
import axios from "axios";
import phoneServices from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    phoneServices.getData().then((returnedData) => {
      setPersons(returnedData);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const newObject = { name: newName, number: newNumber };

    const exists = (value) =>
      value.name === newObject.name && value.number === newObject.number;

    const bool = persons.some(exists);

    if (bool) {
      alert(`${newName} is already added to the phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      phoneServices.create(newObject);

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
    const returnedValue = event.target.value;

    setNewNumber(returnedValue);
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
