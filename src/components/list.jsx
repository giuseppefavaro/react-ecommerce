import { useEffect, useState } from "react";

import { Product } from "./product";

const initialProducts = ["prodotto 1", "prodotto 2", "prodotto 3"];

export const List = () => {

    const [products, setProducts] = useState(initialProducts);

    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    };

    console.log(products);


    useEffect(() => { getData() }, [])



  return (
    <section className="products">
      <ul className="productsGrid">
        {products.map((item, index) => (
          <li key={index}>
            <Product img={item.image} title={item.title} price={item.price} />
          </li>
        ))}
      </ul>
    </section>
  );
};