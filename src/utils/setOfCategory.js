export const setOfCategory = (tickets, query = "status", users = []) => {
  if (!users.length) {
    const setOfCategory = new Set();
    tickets.forEach((ticket) => {
      setOfCategory.add(ticket[query]);
    });
    return setOfCategory;
  } else {
    const setOfCategory = new Set();
    users.forEach((usr) => {
      setOfCategory.add(usr.id);
    });
    return setOfCategory;
  }
};

export const Priority = {
  0: "No priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

export const mapPriorityToText = (category, state) => {
  // console.log(state);
  if (state.groupBy !== "userId") {
    if (Priority.hasOwnProperty(category)) return Priority[category];
    else return category;
  } else {
    const usr = state.users.find((usr) => usr.id === category);
    // console.log(usr);
    return usr.name;
  }
};
