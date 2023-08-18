import { setOfCategory } from "../utils/setOfCategory";
import { sortTickets } from "../utils/sortTickets";
export const initialState = {
  tickets: [],
  users: [],
  groupBy: "status",
  orderBy: "priority",
  queryCategory: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TICKETS":
      return {
        ...state,
        queryCategory: [...setOfCategory(action.tickets)],
        tickets: sortTickets(action.tickets, state.orderBy),
      };

    case "SET_USERS":
      return { ...state, users: action.users };

    case "SET_GROUPBY_QUERY":
      return {
        ...state,
        groupBy: action.groupBy,
        queryCategory:
          action.groupBy === "userId"
            ? [...setOfCategory(state.tickets, action.groupBy, state.users)]
            : [...setOfCategory(state.tickets, action.groupBy)],
      };

    case "SET_ORDERBY_QUERY":
      return {
        ...state,
        orderBy: action.orderBy,
        tickets: sortTickets(state.tickets, action.orderBy),
      };

    case "SET_VIEW_STATE":
      return {
        ...state,
        orderBy: action.orderBy,
        groupBy: action.groupBy,
        users: action.users,
        queryCategory:
          action.groupBy === "userId"
            ? [...setOfCategory(action.tickets, action.groupBy, action.users)]
            : [...setOfCategory(action.tickets, action.groupBy)],
        tickets: sortTickets(action.tickets, action.orderBy),
      };
    default:
      return state;
  }
};
