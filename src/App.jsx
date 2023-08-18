import { useReducer, useEffect, createContext } from "react";
import "./App.css";
import GroupBySelector from "./components/GroupBySelector";
import MainColumn from "./components/CategoryColumn/MainColumn";
import { getTasks } from "../src/api/getTasks";
import { initialState, reducer } from "./store/ticketReducer";

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // fetch tasks
    const getTasksResponse = async () => {
      const res = await getTasks();
      const tasks = await res.json();
      // console.log(tasks);
      const viewState = JSON.parse(localStorage.getItem("view"));
      dispatch({ type: "SET_TICKETS", tickets: tasks.tickets });
      dispatch({ type: "SET_USERS", users: tasks.users });

      // for getting the stored state from localStorage each the users reloads
      if (viewState) {
        dispatch({
          type: "SET_VIEW_STATE",
          groupBy: viewState.groupBy,
          orderBy: viewState.orderBy,
          tickets: tasks.tickets,
          users: tasks.users,
        });
      }
    };
    getTasksResponse();
  }, []);
  console.log(state);

  return (
    <>
      <AppContext.Provider
        value={{
          tickets: state.tickets,
          users: state.users,
          dispatch: dispatch,
          groupBy: state.groupBy,
          orderBy: state.orderBy,
        }}
      >
        <header className="head">
          <div className="container header-content">
            <GroupBySelector />
          </div>
        </header>
        <section className="category-wrapper">
          <div className="container category-wrapper-content">
            {state.queryCategory.map((category, i) => {
              return <MainColumn key={i} category={category} />;
            })}
          </div>
        </section>
      </AppContext.Provider>
    </>
  );
}

export default App;
