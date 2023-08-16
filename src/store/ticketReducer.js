import { setOfCategory } from "../utils/setOfCategory";

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
        tickets: action.tickets,
        queryCategory: [...setOfCategory(action.tickets)],
      };

    case "SET_USERS":
      return { ...state, users: action.users };

    case "SET_GROUPBY_QUERY":
      return {
        ...state,
        groupBy: action.groupBy,
        queryCategory: [...setOfCategory(state.tickets, action.groupBy)],
      };
    default:
      return state;
  }
};
