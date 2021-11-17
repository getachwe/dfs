// import * as React  from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import produce from "immer";


export default function BasicCard() {
  const [row, setRow] = useState("");
  const [Cols, setCols] = useState("");

  const numRows = 10;
  const numCols = 10;
  const rows = [];
  const generateEmptyGrid = () => {
   
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
      );
    }

    return rows;
  };
  const solve = () => {
   
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
      );
    }

    return rows;
  };

  const restart = () => {
    const rows = [];
    for (let i = 0; i < 0; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
      );
    }

    return rows;
  };

  const [group, setGroups] = useState(() => {
    return generateEmptyGrid();
  });

  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter please enter bitmap size"
            id="demo-helper-text-aligned"
            label="Row"
            value={row}
            onChange={(e) => {
              setRow(e.target.value);
            }}
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Column"
            value={Cols}
            onChange={(e) => {
              setCols(e.target.value);
            }}
          />
        </Box>
        <div className='mytable'
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numCols}, 20px)`,
            
          }}
          
        >
      
          {grid.map((rows, i) =>
            rows.map((col, k) => (
              <div
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: grid[i][k] ? "black" : undefined,
                  border: "solid 1px black",
                }}
              />
            ))
          )}
        </div>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            setGrid(generateEmptyGrid);
          }}
        >
          RANDOMIZE
        </Button>

        <Button
          size="small"
          onClick={() => {
            const solution = setGroups();

            debugger;
            for (let i = 2; i < solution.groupIndex; i++) {
              this.colors[i] = Math.floor(Math.random() * 16777215).toString(
                16
              );
            }
          }}
        >
          solve
        </Button>

        <Button
          size="small"
          onClick={() => {
            setGrid(restart());
          }}
        >
        RESTART
        </Button>
      </CardActions>
    </Card>
  );
}
