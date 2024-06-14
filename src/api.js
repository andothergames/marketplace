import axios from "axios"

const marketplaceAPI = axios.create({
    baseURL: "https://nc-marketplace-sem-4.onrender.com/api/"
})

export const fetchItems = (category) => {
    let string = `items`
    if (category !==undefined) {
        string += `?category_name=${category}`
    }
        return marketplaceAPI.get(string);
}

export const fetchCategories = () => {
    return marketplaceAPI.get('categories');
}

export const postItem = (body) => {
    return marketplaceAPI.post('items', body)
    .then((res) => {
        console.log(res.data.item);
    })
    .catch((err) => {
        console.log(err);
    })
}