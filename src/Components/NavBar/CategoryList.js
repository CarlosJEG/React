import './CategoryList.css';
import { NavLink } from "react-router-dom";

function CategoryList () {

    const categories = [
        {name: "Home", id: 0, ruta: "/"},
        {name: "smartphones", id: 1, ruta: "/category/smartphones"},
        {name: "laptops", id: 2, ruta: "/category/laptops"},
        {name: "fragrances", id: 3, ruta: "/category/fragrances"},
        {name: "Contact us", id: 4, ruta: "/AboutUsView"},
    ]

    return (
        <nav className="navbar">
            <ul>
                {categories.map((category) => {
                    return <li><NavLink key={category.id} to={category.ruta}>{category.name}</NavLink></li>
                })}
            </ul>
        </nav>
    )
}

export default CategoryList;