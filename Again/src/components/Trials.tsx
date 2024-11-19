function Trials() {
  const Footballers = [
    "Messi",
    "Ronaldo",
    "Cristiano",
    "Suarez",
    "Lionel Messi",
    "Ramos",
  ];

  return (
    <div>
      <ul className="list-group">
        {Footballers.map((Footballer) => (
          <li key={Footballer}>{Footballer}</li>
        ))}
      </ul>
    </div>
  );
}

export default Trials;
