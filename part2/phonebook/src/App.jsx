import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const newObject = { name: newName };
    const exists = (value) => value.name === newObject.name;
    const bool = persons.some(exists);

    if (bool) {
      alert(`${newName} is already added to the phonebook`);
      setNewName("");
    } else {
      setPersons(persons.concat(newObject));
      setNewName("");
    }
  };

  const onChange = (event) => {
    setNewName(event.target.value);
  };

  const DisplayForm = ({ persons }) => {
    return (
      <div>
        {persons.map((person) => {
          return <p key={person.name}>{person.name}</p>;
        })}
      </div>
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>
          name: <input value={newName} onChange={onChange} />
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
