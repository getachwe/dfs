import React, { useState } from "react";
import Button from "@mui/material/Button";

function Matrix(table) {
  const [Group, setGroups] = useState(0);

  function solveTable() {
    const solution = setGroups(table);
    table = solution.table;
    debugger;
    for (let i = 2; i < solution.groupIndex; i++) {
      this.colors[i] = Math.floor(Math.random() * 16777215).toString(16);
    }
  }

  return (
    <div>
      <Button variant="contained" size="medium" onClick={() => solveTable}>
        solve
      </Button>
      {Group}
    </div>
  );
}
export default Matrix;
