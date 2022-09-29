import './ItemList.css';

function ItemList () {

    const categories = [
        {name: "Inicio", id: 0, ruta: "#"},
        {name: "Accesorios", id: 1, ruta: "#"},
        {name: "Juguetes", id: 2, ruta: "#"},
        {name: "Ropa", id: 3, ruta: "#"},
        {name: "Contactanos", id: 4, ruta: "#"},
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

export default ItemList;