import { useState } from "react";

import {Header} from "./components/header";
import {List} from "./components/list";
import {Sidebar} from "./components/sidebar";


import './App.css';



function App() {


  const [category, setCategory] = useState("");

  const catSelection = (value) => {
    console.log(value);
    setCategory(value);
  };



  return (
    <main>
      <Header />
      <div className="content">
        <Sidebar catSelection={catSelection} />
        <List category={category} />
      </div>
    </main>
  );
}

export default App;
