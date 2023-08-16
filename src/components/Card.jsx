import React from "react";
import "../css/card.css";
import { hideText } from "../utils/showLimitedText";
const Card = ({ ticket }) => {
  return (
    <div className="card">
      <div className="ticket-row-1">
        <div className="ticket-userId">{ticket?.id}</div>
        <div className="user-photo"></div>
      </div>
      <div className="ticket-row-2 title">
        <span className="status">
          <i className="bi bi-check-circle-fill"></i>
        </span>{" "}
        <span className="description">{hideText(ticket?.title)}</span>
      </div>
      <div className="ticket-row-3">
        <div className="feat-req">
          <span className="feat-req-icon">
            <i className="bi bi-circle-fill"></i>
          </span>
          <span className="Feature-description">Feature Request</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
