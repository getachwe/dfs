import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./Home.css";
import Matrix from "./Matrix";



const Home = () => {

  const [val_1, setval_1] = useState("");
  const [val_2, setval_2] = useState("");
  const [table , settable] = useState([]);
  

  function createTable(val_1, val_2) {

    <template>
<div class="home column">

  <q-card class="my-card">
    <q-card-section>
      <q-input class="TextField" v-model="val_1" type="number" label="enter m (rows)" />
      <q-input class="TextField" v-model="val_2" type="number" label="enter n (column)" />
    </q-card-section>
    <q-card-actions horizontal align="center">
      <q-btn color="green" label="build" class="button" icon="send" click="createTable" />
      <q-btn color="green" label="RANDOMIZE" class="button" icon="shuffle" click="randomizeTable" />
      <q-btn color="green" label="solve" class="button" icon="done" click="solveTable" />
    </q-card-actions>
  </q-card>
  <table colors ="colors" table="table"/>
</div>
</template>

      for (let i = 0; i < val_1; i++) {
        settable[i] = []
        for (let j = 0; j < val_2; j++) {
          settable[i][j] = 0
        }
      }
      
    
  }

  function randomizeTable() {
    for (let i = 0; i < val_1; i++) {
      for (let j = 0; j < val_2 ; j++) {
        table[i][j] = Math.round(Math.random())
      }
    }
  
    
  }

  return (
    <div className="div">
      <h4>please enter bitmap size:</h4>
      <TextField
        id=" id= margin-none 1"
        label={"Bitmap size: n"}
        variant="outlined"
        value={val_1 }
        onChange = {(e)=>{
          setval_1(e.target.value);
          setval_2(e.target.value);
        }}
      />
      
      <br />
      <Button variant="contained" size="medium" onClick = {()=> {(createTable(val_1 , val_2))(randomizeTable)}}>
      {table}
        RANDOMIZE
      </Button>
      <Matrix table = {table} />
    </div>
  );
};
export default Home;
