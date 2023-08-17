import React, { useContext } from "react";
import "../../css/CategoryColumn/mainColumn.css";
import CategoryHeader from "./CategoryHeader";
import Card from "../Card";
import { AppContext } from "../../App";
import { returnQueryResults } from "../../utils/ReturnElements";
const MainColumn = ({ category }) => {
  const state = useContext(AppContext);
  // console.log(state);

  // returnQueryResults(category, state.tickets);
  return (
    <div className="wrapper">
      <CategoryHeader
        category={category}
        listLength={returnQueryResults(category, state.tickets, state.groupBy)}
      />
      <div className="card-list">
        {returnQueryResults(category, state.tickets, state.groupBy).map(
          (ticket, i) => {
            return <Card ticket={ticket} key={i} />;
          }
        )}
      </div>
    </div>
  );
};

export default MainColumn;
