import React from "react";

export default function Heading(props) {
  const { heading } = props;
  return (
    <>
    <h1>
      {heading}
      </h1>
    </>
  );
}
