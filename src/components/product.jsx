const Product = (props) => {
    return  (
        <article>
            <img src={props.img} alt="" />
            <p>{props.price}</p>
            <h4>{props.title}</h4>
        </article>
    )
}

export {Product};