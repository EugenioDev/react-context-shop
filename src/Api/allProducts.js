import axios from "axios";

export const allProducts = async () => {
    const url = 'https://fakestoreapi.com/products'
    const response = await axios.get(url)
    return response
}