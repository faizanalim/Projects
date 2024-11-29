function LoopMap() {
  const UserData = [
    {
      Id: 1,
      UserName: "Sam",
      Age: 25,
    },
    {
      Id: 2,
      UserName: "James",
      Age: 30,
    },
    {
      Id: 3,
      UserName: "ZAmpa",
      Age: 32,
    },
  ];

  return (
    <>
      <h1>Loop Map</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>AGE</td>
          </tr>
        </thead>
        <tbody>
          {UserData.map((user) => (
            <tr key={user.Id}>
              <td>{user.Id}</td>
              <td>{user.UserName}</td>
              <td>{user.Age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>DumpyData</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>AGE</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>JAmes</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default LoopMap;
