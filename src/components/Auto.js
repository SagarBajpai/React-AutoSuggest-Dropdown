import React from "react";
import AutoComplete from "./AutoComplete";

const Auto = () => {
  return (
    <div>
      <h1>React Autocomplete Demo</h1>
      <h2>Type United States Bank Names</h2>
      <AutoComplete
        suggestions={[
          "Chase",
          "BB&T",
          "Capital One",
          "Charles Schwab",
          "Citi",
          "Citizens Bank",
          "Fidelity",
          "Navy Federal",
          "PNC",
          "Regions",
          "SunTrust",
          "TD Bank",
          "US Bank",
          "USSA",
          "Wells Fargo"
        ]}
      />
    </div>
  );
}

export default Auto;