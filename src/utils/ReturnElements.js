export const returnQueryResults = (category, tickets, groupBy = "status") => {
  const queryResult = tickets.filter((tckt) => tckt[groupBy] === category);
  return queryResult;
};
