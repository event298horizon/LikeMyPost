import React from "react";

export default function Alert(props) {

    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    <div style={{height: '20px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
      {capitalize(props.alert.type)}: {props.alert.message}
    </div>}
    </div>
  );
}
