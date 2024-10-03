export default class ProductService {
    static async getProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    }

    static async getProductById(id: string) {
        const response = await fetch("https://fakestoreapi.com/products/" + id);
        const data = await response.json();
        return data;
    }
}
