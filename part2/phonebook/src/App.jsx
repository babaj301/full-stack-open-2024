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

    const existedObject = persons.find((obj) => {
      return newName === obj.name;
    });

    const idForChange = existedObject.id;

    console.log(existedObject);

    if (existedObject) {
      if (
        window.confirm(
          `${existedObject.name} is already added to phonebook, replace the old number`
        )
      ) {
        phoneServices.edit(idForChange, {
          ...existedObject,
          number: newNumber,
        });

        setNewName("");
        setNewNumber("");
      }
    } else {
      phoneServices.create(newObject).catch((error) => {
        alert(`Not succesful`, error);
      });

      setPersons(persons.concat(newObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const filtered = persons.filter((person) => {
    return person.name.toLowerCase().includes(input.toLowerCase());
  });

  // console.log(filtered);

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

  const handleDelete = (event) => {
    const id = event.target.id;

    if (window.confirm(`Are you sure you wan to delete that number`))
      phoneServices.removePerson(id);
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

      <PersonDisplay
        key={persons.name}
        filtered={filtered}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
