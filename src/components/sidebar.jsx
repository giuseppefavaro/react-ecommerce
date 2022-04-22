import { useState, useEffect } from "react";

const mock = ["category 1", "category 2", "category 3"];


const Sidebar = (props) => {

    const [current, setCurrent] = useState("");

    const [categories, setCategories] = useState(mock);
  
    const getData = async () => {
      const response = await fetch("https://fakestoreapi.com/products/categories/");
      const data = await response.json();
      setCategories(data);
      data.unshift("All");
    };

    useEffect(() => {
      getData();
    }, []);




    const clicked = (event, category) => {
      event.preventDefault();
      // console.log(category);
      props.catSelection(category);

      setCurrent(category);
    };

    
  
    return (
      <aside className="sidebar">
        <h2>Categories</h2>
        <ul>
          {categories.map((item, index) => (
            <li key={index}>
            <a href={item} onClick={(event) => clicked(event, item)} className={item === current ? "active" : ""}>
              {item}
            </a>
          </li>
          ))}
        </ul>
      </aside>
    );
  };

export {Sidebar};