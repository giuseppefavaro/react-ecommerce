
import { useState } from "react";

const Header = (props) => {
    
    const [search, setSearch] = useState("");


    const changing = (event) => {
        setSearch(event.target.value);

        props.textSearch(search);
    };



    return (
        <header className="header">
        <img src={process.env.PUBLIC_URL + '/logo-ecommerce.png'} width="254" height="22" alt="React ecommerce" />
        <form>
            <input value={search} onChange={changing} type="text" placeholder="Search..." />
        </form>
        </header>
    )
}

export {Header};