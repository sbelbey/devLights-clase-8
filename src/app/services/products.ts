export default class ProductService {
    static async getProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    }
}
