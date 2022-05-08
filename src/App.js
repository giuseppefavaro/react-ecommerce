import { useState } from "react";

import {Header} from "./components/header";
import {List} from "./components/list";
import {Sidebar} from "./components/sidebar";


import './App.css';



function App() {


  const [category, setCategory] = useState("");

  const [search, setSearch] = useState("");


  const textSearch = (value) => {
    // console.log(value);
    setSearch(value);
  }


  const catSelection = (value) => {
    // console.log(value);
    setCategory(value);
  };



  return (
    <>
      <Header textSearch={textSearch} />
      <main className="content">
        <Sidebar catSelection={catSelection} />
        <List category={category} search={search} />
      </main>
    </>
  );
}

export default App;
