export const setOfCategory = (tickets, query = "status") => {
  const setOfCategory = new Set();
  tickets.forEach((ticket) => {
    setOfCategory.add(ticket[query]);
  });
  return setOfCategory;
};
