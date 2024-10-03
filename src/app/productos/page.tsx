"use client";
import React, { useState, useEffect } from "react";
import ProductService from "../services/products";
import Image from "next/image";

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

async function getProducts() {
    const data = await ProductService.getProducts();
    console.log("🚀 ~ data:", data);
    return data;
}

export default function Page() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const data = getProducts();

        data.then((data) => {
            setAllProducts(data);
        });
    }, []);

    return (
        <div>
            {allProducts.length &&
                allProducts.map((product: Product) => {
                    return (
                        <div key={product.id}>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <Image
                                src={product.image}
                                alt={product.title}
                                width="200"
                                height="200"
                            />
                        </div>
                    );
                })}
        </div>
    );
}
