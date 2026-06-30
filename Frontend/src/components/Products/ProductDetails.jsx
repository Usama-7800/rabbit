import { useEffect, useState } from "react";


const selectedProduct = {
    name: "Slim-Fit Easy-Iron Shirt",
    price: 34.99,
    originalPrice: 45.00,
    description: "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
    brand: "Urban Chic",
    material: "Cotton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey", "Dark Grey", "Blue", "Red"],
    images: [
        {
            url: "https://picsum.photos/500/500?random=10",
            altText: "Slim-Fit Easy-Iron Shirt Front View"
        },
        {
            url: "https://picsum.photos/500/500?random=11",
            altText: "Slim-Fit Easy-Iron Shirt Back View"
        }
    ]
};
export default function ProductDetails() {
    // const [mainImage, setMainImage] = useState("");
    const [mainImage, setMainImage] = useState(() => {
        return selectedProduct?.images?.[0]?.url || "";
    });
    const[selectedSize,setSelectedSize]=useState("")
    const[selectedColor,setSelectedColor]=useState("")
    const[quantity,setQuantity]=useState(1);
    const[isButton,setIsButton]=useState(false);


    // useEffect(() => {
    //     if (selectedProduct?.images?.length > 0) {
    //         setMainImage(selectedProduct?.images[0]?.url)
    //     }
    // }, [selectedProduct])
    return (
        <div className="p-4">
            <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg">
                <div className="flex flex-col md:flex-row">
                    {/* left thumbnails  */}
                    <div className="hidden md:flex flex-col space-y-4 mx-6">
                        {selectedProduct.images.map((image, index) => (
                            <img src={image.url} alt={image.altText || `thumbnails ${index}`} onClick={() => setMainImage(image.url)} key={index} className={`w-20 h-20 object-cover rounded-lg cursor-pointer border p-0.5 ${mainImage === image.url ? "border-black" : "border-gray-300"}`} />
                        ))}
                    </div>
                    {/* main image  */}
                    <div className="md:w-1/2 ">
                        <div className="mb-4 ">
                            <img src={mainImage} alt="main product" className="w-full h-auto object-cover rounded-lg" />
                        </div>
                    </div>
                    {/* mobile thumbnail  */}
                    <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4 ">
                        {selectedProduct.images.map((image, index) => (
                            <img src={image.url} onClick={() => setMainImage(image.url)} alt={image.altText || `thumbnails ${index}`} key={index} className={`w-20 h-20 object-cover rounded-lg cursor-pointer border p-0.5 ${mainImage === image.url ? "border-black" : "border-gray-300"}`} />
                        ))}
                    </div>
                    {/* right section  */}
                    <div className="md:w-1/2 md:ml-10">
                        <h1 className="text-2xl md:3xl font-semiboldmb-2">{selectedProduct.name}</h1>
                        <p className="text-lg text-gary-600 mb-1 line-through">{selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
                        </p>
                        <p className="text-xl text-gray-500 mb-2">${selectedProduct.price}</p>
                        <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                        <div className="mb-4">
                            <p className="text-gray-700">Color:</p>
                            <div className="flex gap-2 mt-2">{selectedProduct.colors.map((color) => (
                                <button onClick={()=> setSelectedColor(color)} className="w-8 h-8 rounded-full border" key={color} style={{ backgroundColor: color.toLocaleLowerCase(), filter: "brightness(0.5)" }}></button>
                            ))}</div>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-700">Size:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.sizes.map((size) => (
                                    <button className="px-4 py-2 rounded border" key={size} >{size}</button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-6 ">
                            <p className="text-gray-700">Quantity:</p>
                            <div className="flex items-center space-x-4 mt-2">
                                <button className="px-2 py-1 bg-gray-200 rounded text-lg">-</button>
                                <span>1</span>
                                <button className="px-2 py-1 bg-gray-200 rounded text-lg">+</button>
                            </div>
                        </div>
                        <button className="bg-black text-white py-2 px-6 rounded w-full mb-4">ADD TO CART</button>
                        <div className="mt-10 text-gray-700 ">
                            <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                            <table className="w-full text-left text-sm text-gray-600">
                                <tbody>
                                    <tr>
                                        <td className="py-1">Brand</td>
                                        <td className="py-1">{selectedProduct.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">Materil</td>
                                        <td className="py-1">{selectedProduct.material}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
