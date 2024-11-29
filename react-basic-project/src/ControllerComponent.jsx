import { useState } from "react";
function ControllerComponent() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <h1>Controller Component1</h1>
      <form action="">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Name"
        />
        <br></br>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Password"
        />
        <br></br>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Email"
        />
        <br></br>
        <br></br>
        <button>Submit</button>
        <button
          onClick={() => {
            setEmail("");
            setPassword("");
            setName("");
          }}
        >
          Clear
        </button>
        <br></br>
        <h4>{name}</h4>
        <h4>{password}</h4>
        <h4>{email}</h4>
      </form>
    </>
  );
}

export default ControllerComponent;
