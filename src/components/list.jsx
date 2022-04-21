import { useEffect, useState } from "react";
import { Product } from "./product";

const mock = [
  {
    id: 0,
    title: "prodotto 1",
    price: 0,
    image: "https://via.placeholder.com/500x300",
  },
  {
    id: 1,
    title: "prodotto 2",
    price: 0,
    image: "https://via.placeholder.com/500x300",
  },
  {
    id: 2,
    title: "prodotto 3",
    price: 0,
    image: "https://via.placeholder.com/500x300",
  },
];

export const List = ({category, search}) => {

  const [source, setSource] = useState([]);
  const [products, setProducts] = useState(mock);
  const [isLoading, setLoading] = useState(true);



    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setSource(data);
        setProducts(data);
        setLoading(false);
    };

    // console.log(products);
    console.log(search);


    useEffect(() => { getData() }, [])



    useEffect(() => {
      const filtered = source.filter((product) => {
        if (category === "All") {
          return product;
        } else {
          return product.category === category;
        }
      });
      setProducts(filtered);
      console.log("la categoria ora è", category, filtered);
  
      // eslint-disable-next-line
    }, [category]);





    useEffect(() => {
      const filtered = source.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
      setProducts(filtered);

      // eslint-disable-next-line
    }, [search])
  



  return (
    <section className="products">
      <ul className="productsGrid">
        {products.map((item) => (
          <li key={item.id} className={isLoading ? "loading" : ""}>
            <Product image={item.image} name={item.title} price={item.price} />
          </li>
        ))}
      </ul>
    </section>
  );
};