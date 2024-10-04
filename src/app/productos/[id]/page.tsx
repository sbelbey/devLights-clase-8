import Image from "next/image";
import ProductService from "@/app/services/products";
import AddCartButton from "@/Components/Buttons";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await ProductService.getProductById(params.id);

  return (
    <div className="flex flex-col items-center justify-center p-4 border-2 border-green-500 w-1/5 h-96">
      <Image
        src={product.image}
        alt={product.title}
        width="200"
        height="200"
        className="rounded-t-lg w-full h-1/2 object-contain	"
      />
      <h1>{product.title}</h1>
      <p>
        {product.description.length > 60
          ? `${product.description.substring(0, 57)}...`
          : product.description}
      </p>
      <p>${product.price}</p>

      <AddCartButton
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        text="Agregar al Carrito"
        product={product}
      />
    </div>
  );
}
