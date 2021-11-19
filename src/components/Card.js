// import * as React  from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { setGroups } from "../algos/Algo.js";
//import { pink } from "@mui/material/colors";

export default function BasicCard() {
  const [numOfRows, setNumOfRows] = useState("");
  const [numOfCols, setNumOfCols] = useState("");
  const [colors, setColors] = useState(["fff", "000"]);
  const [grid, setGrid] = useState([]);
  const [numOfGrop, setNumOfGrop] = useState("");


  const generateEmptyGrid = () => {
    const newGrid = [];
    for (let i = 0; i < numOfRows; i++) {
      newGrid[i] = [];
      for (let j = 0; j < numOfCols; j++) {
        newGrid[i].push(Math.round(Math.random()));
      }
    }
    setNumOfGrop();
    return newGrid;
   
  };

  
  const solve = () => {
    const { table, groupIndex } = setGroups(grid);
    let newColors = [];
    for (let i = 2; i < groupIndex; i++) {
      newColors.push(Math.floor(Math.random() * 16777215).toString(16));
      
      setNumOfGrop(groupIndex-2);
    }
    newColors = ["fff", "000", ...newColors];
    debugger;
    setColors(newColors);
    setGrid(table);
  };

  const restart = () => {
    let res=[];
    setNumOfGrop();
    return res;
    
  };
 

  const getColor = (groupId) => {
    return `#${colors[groupId]}`;
  };

  return (
    <Card sx={{ minWidth: 275 , backgroundColor: "pink"}}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter  bitmap size"
            id="demo-helper-text-aligned"
            label="Row"
            value={numOfRows}
            onChange={(e) => {
              setNumOfRows(e.target.value);
            }}
            type="number"
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Column"
            value={numOfCols}
            onChange={(e) => {
              setNumOfCols(e.target.value);
            }}
            type="number"
          />
        </Box>
        <div
          className="mytable"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${grid.length}, 20px)`,
          }}
        >
          {grid.map((row) =>
            row.map((col) => (
              <div
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: getColor(col),
                  border: "solid 1px black",
                }}
              />
            ))
          )}
        </div>
        <p>FUNDE {numOfGrop} ESLANDS</p>
      </CardContent>
      <CardActions>
      
        <Button
          size="small"
          onClick={() => {
            setGrid(generateEmptyGrid());
          }}
        >
          randomize
        </Button>

        <Button
          size="small"
          onClick={() => {
            if (grid.length) {
              solve();
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
          restart
        </Button>
        
      </CardActions>
    </Card>
  );
}
