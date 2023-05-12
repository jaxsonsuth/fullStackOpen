import { useState } from "react";
import Persons from "./Persons";
import PersonForm from "./PersonForm";
import Filter from "./Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "650-526-2979", id: 1 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleAddName = (event) => setNewName(event.target.value);
  const handleAddNumber = (event) => setNewNumber(event.target.value);
  const handleSetFilter = (event) => setFilter(event.target.value);

  const handleAddPerson = (event) => {
    event.preventDefault();
    if (
      !persons
        .map((person) => person.name.toLowerCase() === newName.toLowerCase())
        .includes(true)
    ) {
      const personsObject = [
        {
          name: newName,
          number: newNumber,
          id: persons.length + 1,
        },
      ];
      setPersons(persons.concat(personsObject));
    } else {
      alert(`${newName} is already added to phonebook`);
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSetFilter={handleSetFilter} />

      <h2>Add new contact</h2>
      <PersonForm
        handleAddPerson={handleAddPerson}
        handleAddName={handleAddName}
        handleAddNumber={handleAddNumber}
        newName={newName}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;
