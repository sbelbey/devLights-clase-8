import { useContext } from "react";
import { CartContext } from "@/Components/CartContext";

export default function Page() {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return <div>Error: CartContext not found</div>;
    }

    const { cart } = cartContext;

    return (
        <div>
            <h1>Carrito de compras</h1>
            <div>
                {cart.map((item, index) => (
                    <div key={index}>
                        <p>
                            {item.title} - {item.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
