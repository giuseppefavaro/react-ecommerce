const Product = (props) => {

    const name = props.name || "Product name";
    const price = props.price || 100;
    const image = props.image || "";

    return  (
        <article className="product">
            <img src={image} alt={name} />
            <p>{price}</p>
            <h4>{name}</h4>
        </article>
    )
}

export {Product};