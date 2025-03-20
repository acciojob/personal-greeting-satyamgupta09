import React, { useState } from "react";
export default function Greeting() {
  const [name, setName] = useState("");

  return (
    <div>
      <label>Enter your name:</label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      {name.length > 0 && <p>{`Hello ${name}!`}</p>}
    </div>
  );
}
