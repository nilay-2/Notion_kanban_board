export const sortCategory = (list, groupBy) => {
  if (groupBy === "priority") {
    list.sort((a, b) => {
      return a - b;
    });
  } else {
    list.sort((a, b) => {
      let strA = a;
      let strB = b;

      if (strA < strB) return -1;
      if (strA > strB) return 1;
      return 0;
    });
  }
  return list;
};
