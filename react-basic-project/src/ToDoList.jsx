function ToDoList() {
  return (
    <>
      {/* Excercise JSX */}
      <h1>Faizan!!!</h1>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-13.png"
        alt="Faizan"
        className="Photo"
      ></img>
      <ul>
        <li> One </li>
        <li> Two </li>
        <li> Three </li>
      </ul>
      <button onClick={() => alert("Hello Function clicked!!!")}>
        Clickme
      </button>
    </>
  );
}

export default ToDoList;
