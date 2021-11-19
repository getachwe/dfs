let groupIndex;
export const setGroups = (table) => {
  groupIndex = 2;
  if (!table) {
    return;
  }
  for (let R = 0; R < table.length; R++) {
    for (let C = 0; C < table[0].length; C++) {
      if (table[R][C] === 1) {
        dfs(table, R, C);
        groupIndex++;
      }
    }
  }
  return { table, groupIndex };
};

const dfs = (table, R, C) => {
  if ( R < 0 ||
    R >= table.length ||
    C < 0 ||
    C >= table.length ||
    table[R][C] !== 1
  )
    return;
  table[R][C] = groupIndex;

  for (let i = -1; i < 2; ++i) {
    for (let j = -1; j < 2; ++j) {
      dfs(table, R + i, C + j);
    }
    //return true;
  }
  // dfs(table, i - 1, j - 1);
  // dfs(table, i - 1, j);
  // dfs(table, i - 1, j + 1);
  // dfs(table, i, j - 1);
  // dfs(table, i, j + 1);
  // dfs(table, i + 1, j - 1);
  // dfs(table, i + 1, j);
  // dfs(table, i + 1, j + 1);
};
