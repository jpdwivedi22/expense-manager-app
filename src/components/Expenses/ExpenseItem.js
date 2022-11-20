import React from "react";

import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItems(props) {
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />{" "}
      {/* self closing if there is nothing inn  between */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}
export default ExpenseItems;
