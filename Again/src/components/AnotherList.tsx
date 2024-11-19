function AnotherList() {
  const Students = ["Ama", "Jane", "John", "Emma", "Michael", "David"];

  return (
    <div>
      <ul className="list-group">
        {Students.map((Student) => (
          <li key={Student}>{Student}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnotherList;
