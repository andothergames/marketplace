const ShopItems = ({ item }) => {
    return (
        <li className="itemCard">
        <img src={item.img_url} alt={`${item.item_name} thumbnail`} />
        <section className="itemDetails">
        <h3>{item.item_name}</h3>
        <p><i>{item.description}</i></p>
        <p>Category: {item.category_name}</p>
        <p>Price: {item.price}p</p>
        <button>Buy!</button>
        </section>
        </li>
        )
}

export default ShopItems;