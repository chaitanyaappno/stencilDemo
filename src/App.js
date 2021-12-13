import React, { useState, useEffect } from "react";

import "./App.css";
import { client } from "./client";

function App() {
  const [articles, setArticles] = useState([]);
  const [counter,setCounter] = useState(0)
  const [randomNumber,setRandomNumber] = useState(0)

  // console.log("articles",articles)

  useEffect(() => {
    // client
    //   .getEntries()
    //   .then(res=>res?.items)
    //   .then(data=>setArticles(data))
      console.log("without counter depep")
      
  }, [counter,randomNumber]);

  function handleClick(){
    setCounter(counterState=>counterState+1)
    if(counter>=10){
      setRandomNumber(1)
    }
  }
  return (
   <div className="App">
    {/* { articles?.map((article,index)=>(
      <div className="container" key = {index}>
        <header>
          <div className="wrapper">
            <span>
          {article?.fields?.name}
            </span>
          </div>
        </header>
        <main>
          <div className="wrapper">
          <h1>Hello</h1>
          </div>
        </main>
      </div>
    )) } */}
    <p>{counter}</p>
    <p>{randomNumber}</p>

    
    <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default App;
