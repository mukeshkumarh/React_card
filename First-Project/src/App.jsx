import React from "react";
import Card from "./Component/Card";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  let data = [
    {
      id: 1,
      heading: "Mobile Operating System",
      list: [
        { id: 101, title: "Android" },
        { id: 102, title: "IOS" },
        { id: 103, title: "Blackberry" },
        { id: 104, title: "Windows" },
      ],
    },
    {
      id: 2,
      heading: "Mobile Manufacturers",
      list: [
        { id: 201, title: "Samsung" },
        { id: 202, title: "HTC" },
        { id: 203, title: "Micromax" },
        { id: 204, title: "Apple" },
      ],
    },
  ];
  return (
    <>
      
      {data.map((item) =>(
        <Card {...item} />
      ))}
    
    </>
  );
}
