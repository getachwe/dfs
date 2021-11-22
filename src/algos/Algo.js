let groupIndex;
export let setGroups = (table) => {
  groupIndex = 2;
   if (!table.length) return 
  let visited = [...Array(table.length)].map(_ => Array(table[0].length).fill(false))
  
  for (let R = 0; R < table.length; R++) {
    for (let C = 0; C < table[0].length; C++) {
       if (table[R][C] === 1 && !visited[R][C] ) {
  bfs(table,visited,R, C)
        groupIndex++;
      }
    }
  }
  
  return { table, groupIndex };
};



let bfs = function(table, visited, R, C) {
  let stack = [[R,C]];
  
  while (stack.length) {
     let [row, column] = stack.pop()
      
      if (isValid(table, visited, row, column) === false) continue;
      
      visited[row][column] = true;

      table[row][column] = groupIndex;
      stack.push([row-1, column-1])
      stack.push([row-1, column])
      stack.push([row-1, column+1])
      stack.push([row, column-1])
      stack.push([row, column+1])
      stack.push([row+1, column-1])
      stack.push([row+1, column])
      stack.push([row+1, column+1])
  }
}

let isValid = function(table, visited, R, C) {
  if (R >= table.length || R < 0) return false;
  if (C >= table[R].length || C < 0) return false;
  if (table[R][C] === 0) return false;
  if (visited[R][C]) return false;
  return true;    
}
