import ProductService from "../services/products";
import Product from "@/Components/Product";

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

export default async function Page() {
    const products: Product[] = await ProductService.getProducts();

    return (
        <div className="flex flex-wrap justify-center items-center gap-4 w-3/4 border-2 border-blue-500">
            {products.length &&
                products.map((product: Product) => {
                    return <Product product={product} key={product.id} />;
                })}
        </div>
    );
}
