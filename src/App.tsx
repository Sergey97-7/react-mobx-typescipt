import * as React from "react";

import logo from "./logo.svg";
import "./App.css";
import TClass from "./components/testClass";
import MyComp from "./components/testComponent";
import SearchPanel from "./components/SearchPanel";
const App: React.FC = () => {
  let b = () => {};
  function greet(a: string): void {
    let x: [string, number];
    // Его инициализация
    x = ["hello", 10]; // OK
    x.push(a);
    console.log("aa", x);
  }
  // greet2: () => {
  //   greet();
  //   // this.b();
  // };
  return (
    <React.Fragment>
      <div>
        <TClass />>
      </div>
      <div>
        <MyComp />
      </div>
      <div><SearchPanel /></div>
    </React.Fragment>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     {b()}
    //     {greet("s")}
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
};

export default App;
