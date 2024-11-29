/* eslint-disable react/prop-types */

const User = ({ data }) => {
  return (
    <div
      style={{
        border: "1px solid green",
        padding: "10px",
        margin: "10px",
        width: "400px",
        borderRadius: "10px",
      }}
    >
      <h3>
        Name: <span style={{ color: "green" }}>{data.UserName}</span>
      </h3>
      <h3>
        Id: <span style={{ color: "green" }}>{data.Id}</span>
      </h3>
      <h3>
        Age: <span style={{ color: "green" }}>{data.Age}</span>
      </h3>
    </div>
  );
};

export default User;
