import React from 'react'
import Heading from "./Heading"
import List from "./List"
export default function Card(props) {
  const{heading, list} = props;
  return (
    <>
      <Heading heading={heading}/>
      <List list={list}/>
    </>
  )
}
