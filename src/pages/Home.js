import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./Home.css";
import Matrix from "../components/Matrix";
//import { Card } from "@material-ui/core";
import Card from "../components/Card";

const Home = () => {
  <template>
    <div v-show="table.length" class="table row">
      <div
        v-for="(row, indexRow) in table"
        class="columns column"
        key="indexRow"
      >
        <div
          v-for="(element, indexColumn) in row"
          class="element"
          style="getColor(indexRow,indexColumn)"
          key="indexColumn"
        ></div>
      </div>
    </div>
  </template>;

  const [color, setColor] = useState();
  const [table, setTable] = useState("");
  const [Data, setData] = useState("");

  function createTable() {
    for (let i = 0; i < Data.xAxis; i++) {
      table[i] = [];
      for (let j = 0; j < Data.yAxis; j++) {
        table[i][j] = 0;
      }
    }
  }

  function data() {
    return { 
      xAxis: 0,
      yAxis: 0,
      table: [],
      show: false,
      groups: 0,
      colors: [],
    };
  }
  setData(data);

  function getColor(i, j) {
    debugger;
    const val = table[i][j];
    if (val === 0) return "background-color: white;";
    if (val === 1) return "background-color: black;";
    else return `background-color: #${data.colors[val]}`;
  }
  setTable(createTable);
  setColor(getColor);

  return (
    <div className="div">
      <Card />
    </div>
  );
};
export default Home;
