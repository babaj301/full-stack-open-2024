const PersonDisplay = ({ filtered }) => {
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

export default PersonDisplay;
