import {Header} from "./components/header";
import {List} from "./components/list";
import {Sidebar} from "./components/sidebar";


import './App.css';



function App() {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar />
        <List />
      </div>
    </main>
  );
}

export default App;
