function CurlyBracesJSX() {
  const name = "faizan";
  let x = 10;
  let y = 20;

  var userArray = ["sam", "Maxwell", "Martin"];

  const Userobj = {
    Name: "Test",
    age: "30",
  };

  function Sum(a, b) {
    return a + b;
  }
  function fruit() {
    return "Apple";
  }
  function operational(a, b, op) {
    if (op == "+") {
    }
  }

  return (
    <>
      <h1>{name ? name : "User not fouond"}</h1>
      <h1>{fruit()}</h1>
      <h1>{Userobj.Name}</h1>
      <h1>{Userobj.age}</h1>
      <h1>{userArray[1]}</h1>
    </>
  );
}
