import React from "react"
import ReactDOM from "react-dom"

const heading= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"child"},"hello i am a child class")));
const root=ReactDOM.createRoot(document.querySelector("body"));
  
 

root.render(heading); 