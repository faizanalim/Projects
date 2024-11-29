import { useState } from "react";

import College from "./College";

function App() {
  const collegeData = [
    {
      name: "Massachusetts Institute of Technology (MIT)",
      city: "Cambridge",
      state: "MA", // Added state for more specific location
      website: "www.mit.edu",
      student: [
        {
          name: "Alice",
          age: 20,
          major: "Computer Science", // Added major for student details
        },
        {
          name: "Bob",
          age: 21,
          major: "Electrical Engineering",
        },
      ],
    },
    {
      name: "University of California, Berkeley (UC Berkeley)",
      city: "Berkeley",
      state: "CA", // Added state for more specific location
      website: "www.berkeley.edu",
      student: [
        {
          name: "Charlie",
          age: 23,
          major: "Molecular Biology",
        },
        {
          name: "Diana",
          age: 22,
          major: "History",
        },
      ],
    },
    {
      name: "National University of Singapore (NUS)",
      city: "Singapore",
      country: "Singapore", // Added country for international college
      website: "www.nus.edu.sg",
      student: [
        {
          name: "Ethan",
          age: 24,
          major: "Economics",
        },
        {
          name: "Fiona",
          age: 21,
          major: "Life Sciences",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Nested Loop</h1>
      {collegeData.map((collage, index) => (
        <div key={index}>
          <College collage={collage}></College>
        </div>
      ))}
    </div>
  );
}

export default App;
