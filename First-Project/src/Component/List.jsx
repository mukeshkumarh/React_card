import React from "react";
import Listitems from "./Listitems";
export default function List(props) {
  const { list } = props;
  return (
    <>
    <h3>
      {list.map((listItem) => (
        <Listitems listItem={listItem} />
      ))}
      </h3>
    </>
  );
}
