import React from "react";

export const CompleteTodos = (props) => {
  const { completedTodos, onClickBack } = props;
  return (
    <div className="completed-task-area">
      <p className="area-title">完了のTODO</p>
      <ul>
        {completedTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
