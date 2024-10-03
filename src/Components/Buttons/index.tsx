"use client";

import { useContext } from "react";
import { CartContext } from "../CartContext";

interface Product {
    id: number;
    title: string;
    price: number;
    quantity?: number;
}

export default function AddCartButton({
    text,
    className,
    product,
}: {
    text: string;
    className?: string;
    product: Product;
}) {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error("CartContext must be used within a CartProvider");
    }

    const { addToCart } = cartContext;

    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
            onClick={() => addToCart({ ...product, quantity: 1 })}
        >
            {text}
        </button>
    );
}
