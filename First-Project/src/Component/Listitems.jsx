import React from "react";

export default function Listitems(props) {
  const { listItem } = props;
  console.log(listItem);
  return (
    <div>
      <li>{listItem.title}</li>
    </div>
  );
}
