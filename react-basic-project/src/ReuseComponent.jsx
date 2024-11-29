import User from "./User";

function ResuseComponet() {
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
      <h1> Resuse Componet !!! </h1>
      {UserData.map((user) => (
        <div key={user.Id}>
          <User data={user}></User>
        </div>
      ))}
    </>
  );
}

export default ResuseComponet;
