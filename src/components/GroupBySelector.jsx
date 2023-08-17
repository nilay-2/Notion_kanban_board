import React, { useState, useContext } from "react";
import "../css/groupBySelector.css";
import { AppContext } from "../App";
import { storeViewState } from "../utils/storeViewState";
const GroupBySelector = () => {
  const state = useContext(AppContext);

  const [openDialog, setOpenDialog] = useState(false);
  const [groupBy, setGroupBy] = useState("status");
  const [orderBy, setOrderBy] = useState("priority");

  // console.log(state);

  const toggleDialogHandler = () => {
    setOpenDialog(!openDialog);
  };

  const stopEventPropogation = (e) => {
    e.stopPropagation();
  };

  const changeGroupByHandler = (e) => {
    setGroupBy(e.target.value);
    state.dispatch({ type: "SET_GROUPBY_QUERY", groupBy: e.target.value });
    storeViewState({ groupBy: e.target.value, orderBy: state.orderBy });
  };

  const changeOrderByHandler = (e) => {
    setOrderBy(e.target.value);
    state.dispatch({ type: "SET_ORDERBY_QUERY", orderBy: e.target.value });
    storeViewState({ groupBy: state.groupBy, orderBy: e.target.value });
  };

  // console.log(groupBy);
  // console.log(orderBy);
  return (
    <div className="groupBy" onClick={toggleDialogHandler}>
      <i className="bi bi-list"></i>
      Display
      <i className="bi bi-caret-down-fill"></i>
      {openDialog && (
        <div className="groupby-content" onClick={stopEventPropogation}>
          <div className="groupby-card">
            <label>Grouping</label>{" "}
            <select
              name="group"
              id="group"
              // value={groupBy}
              onChange={changeGroupByHandler}
              defaultValue={state.groupBy}
            >
              <option value="status">Status</option>
              <option value="priority">Priority</option>
              <option value="userId">User</option>
            </select>
          </div>
          <div className="groupby-card">
            <label>Ordering</label>{" "}
            <select
              name="priority"
              id="priority"
              // value={orderBy}
              onChange={changeOrderByHandler}
              defaultValue={state.orderBy}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupBySelector;
