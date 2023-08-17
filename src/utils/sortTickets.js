export const sortTickets = (tickets, orderBy) => {
  if (orderBy === "priority") {
    tickets.sort((a, b) => {
      return a.priority - b.priority;
    });
    return tickets;
  }
  if (orderBy === "title") {
    tickets.sort((a, b) => {
      let NameA = a.title.toLowerCase();
      let NameB = b.title.toLowerCase();

      if (NameA < NameB) {
        return -1;
      }

      if (NameA > NameB) {
        return 1;
      }

      return 0;
    });
    return tickets;
  }
};
