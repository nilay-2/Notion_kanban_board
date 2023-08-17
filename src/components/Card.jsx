import React, { useContext } from "react";
import "../css/card.css";
import { hideText } from "../utils/showLimitedText";
import { getUserName } from "../utils/getUserName";
import { AppContext } from "../App";
const Card = ({ ticket }) => {
  const state = useContext(AppContext);
  return (
    <div className="card">
      <div className="ticket-row-1">
        <div className="ticket-userId">{ticket?.id}</div>
        <div className="user-photo">
          {getUserName(ticket?.userId, state?.users)}
        </div>
      </div>
      <div className="ticket-row-2 title">
        <span className="status"></span>{" "}
        <span className="description">{hideText(ticket?.title)}</span>
      </div>
      <div className="ticket-row-3">
        <div className="feat-req">
          <span className="feat-req-icon">
            <i className="bi bi-circle-fill"></i>
          </span>
          <span className="Feature-description">{ticket?.tag}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
