import React from "react";

function Alert(props) {
  return (
    <div className="container">
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.msg}</strong> {props.alert.type}
      </div>
    </div>
  );
}

export default Alert;
