import { FormHelperText } from "@mui/material";
import React from "react";

function SearchsIslands(matrix) {
  let res = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      res += helper(row, col);

      function helper(row, col) {
        //handle boundary
        if (row < 0 || row >= matrix.length || col >= matrix.length)
          return false;
      }
      //already visited
      if (!matrix[row][col]) return false;
      matrix[row][col] = 0;

      //seek neighbors
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          helper(row + i, col + j);
          return true;
        }
      }
    }
  }
  return res;
}
