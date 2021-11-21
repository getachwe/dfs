let groupIndex;
export let setGroups = (table) => {
  groupIndex = 0;
   if (!table.length) return 
  let visited = [...Array(table.length)].map(_ => Array(table[0].length).fill(false))
  
  for (let R = 0; R < table.length; R++) {
    for (let C = 0; C < table[0].length; C++) {
       if (table[R][C] === '1' && visited[R][C] === false) {
  bfs(table,  R, C,visited,)
        groupIndex++;
      }
    }
  }
  console.log(groupIndex);
  return { table, groupIndex };
};



let bfs = function(table, visited, R, C) {
  let stack = [[R,C]];
  
  while (stack.length) {
     let [row, column] = stack.pop()
      
      if (isValid(table, visited, row, column) === false) continue;
      
      visited[row][column] = true;

      table[row][column] = groupIndex;
      stack.push([row+1, column])
      stack.push([row-1, column])
      stack.push([row, column+1])
      stack.push([row, column-1])
  }
}

let isValid = function(table, visited, R, C) {
  if (R >= table.length || R < 0) return false;
  if (C >= table[R].length || C < 0) return false;
  if (table[R][C] === 0) return false;
  if (visited[R][C] === true) return false;
  return true;    
}

// export let numIslands = (table)=> {
 
  
//  let groupIndex = 0;
//   for(let r = 0; r < table.length; r++) {
//       for(let c = 0; c < table[r].length; c++) {
//           if (table[r][c] === '1' && visited[r][c] === false) {
//               bfs(table, visited, r, c)
//               groupIndex++;
//           }
//       }
//   }
  
//   return (groupIndex,table);
// };

// let bfs = function(table, visited, r, c) {
//   let stack = [[r,c]];
  
//   while (stack.length) {
//      let [row, column] = stack.pop()
      
//       if (isValid(table, visited, row, column) === false) continue;
      
//       visited[row][column] = true;

//       table[R][C] = groupIndex;
//       stack.push([row+1, column])
//       stack.push([row-1, column])
//       stack.push([row, column+1])
//       stack.push([row, column-1])
//   }
// }

// let isValid = function(table, visited, r, c) {
//   if (r >= table.length || r < 0) return false;
//   if (c >= table[r].length || c < 0) return false;
//   if (table[r][c] === '0') return false;
//   if (visited[r][c] === true) return false;
//   return true;    
// }
