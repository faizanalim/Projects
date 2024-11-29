const College = ({ collage }) => {
  return (
    <div
      style={{
        border: "2px solid green",
        padding: "20px",
        margin: "10px",
        backgroundColor: "#ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Name:{collage.name}</h2>
      <ul>
        <li>
          <h3>City: {collage.city}</h3>
        </li>
        <li>
          <h3>Website: {collage.website}</h3>
        </li>
        <li>
          <h4>Students</h4>
          {collage.student.map((student) => (
            <ul>
              <li>
                <h4>{student.name}</h4>
              </li>
            </ul>
          ))}
        </li>
      </ul>
    </div>
  );
};
export default College;
