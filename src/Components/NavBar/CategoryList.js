import './CategoryList.css';

function CategoryList () {

    const categories = [
        {name: "Home", id: 0, ruta: "#"},
        {name: "smartphones", id: 1, ruta: "#"},
        {name: "laptops", id: 2, ruta: "#"},
        {name: "fragrances", id: 3, ruta: "#"},
        {name: "Contact us", id: 4, ruta: "#"},
    ]

    return (
        <nav className="navbar">
            <ul>
                {categories.map((category) => {
                    return <li><a key={category.id} href={category.ruta}>{category.name}</a></li>
                })}
            </ul>
        </nav>
    )
}

export default CategoryList;