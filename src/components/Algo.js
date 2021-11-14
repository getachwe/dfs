import React from "react";
const Algo = ()=>{
let groupIndex;
const setGroups = (table) => {
    groupIndex = 2
    if (!table) {
        return
    }
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
           if(table[i][j] === 1) {
               dfs(table,i,j)
               groupIndex ++
           }
        }
    }
    return {table , groupIndex}
}

const dfs = (table, i, j) => {
    if (i < 0 || i>= table.length || j < 0 ||j >= table.length || table[i][j] !== 1) return
    table[i][j] = groupIndex
    dfs(table, i - 1 , j - 1)
    dfs(table, i - 1, j)
    dfs(table, i - 1, j + 1)
    dfs(table, i , j - 1)
    dfs(table, i , j + 1)
    dfs(table, i + 1 , j - 1)
    dfs(table, i + 1 , j)
    dfs(table, i + 1 , j + 1)
}

module.exports = {setGroups}
return(
    
)
}
export default Algo;

