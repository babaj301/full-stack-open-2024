import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: `040-1234567` },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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

  const handleName = (event) => {
    setNewName(event.target.value);
  };
  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const DisplayForm = ({ persons }) => {
    return (
      <div>
        {persons.map((person) => {
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
      <DisplayForm key={persons.name} persons={persons} />
    </div>
  );
};

export default App;
