import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function EditProductPage() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "0",
    countInStock: "0",
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    collection: "",
    materials: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
    colors: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Updated:", productData);
  };

  const handleImage = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    // optional: create a local preview URL and add to images
    const previewUrl = URL.createObjectURL(file);
    setProductData((prev) => ({
      ...prev,
      images: [{ url: previewUrl }, ...prev.images],
    }));
    console.log(file);
  };

  const handleDeleteImage = (indexToDelete) => {
    setProductData((prev) => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToDelete),
    }));
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-8 font-sans max-w-5xl mx-auto text-gray-900">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-1.5">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-gray-400"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-1.5">
            Description
          </label>
          <textarea
            name="description"
            rows={5}
            value={productData.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-sm  px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-gray-400 resize-y leading-relaxed"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-1.5">
            Price
          </label>
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-sm  px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Count in Stock */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-1.5">
            Count in Stock
          </label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-sm  px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* SKU */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-1.5">
            SKU
          </label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-sm  px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Sizes */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-1.5">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Colors */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-1.5">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Upload Image */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-900">
            Upload Image
          </label>
          <div className="flex items-center space-x-2 text-sm">
            <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-3 py-1.5 border border-gray-300 rounded-[3px] shadow-sm">
              Choose file
              <input type="file" className="hidden" onChange={handleImage} />
            </label>
            <span className="text-gray-500">No file chosen</span>
          </div>

          {/* Current Uploaded Image Previews */}
          <div className="flex space-x-3 pt-1">
            {/* preview image 
            {productData.images.map((image, index) => (
              <div
                key={index}
                className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-200"
              >
                <img
                  src={image.url}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))} */}
            {/* preview image */}
            {productData.images.map((image, index) => (
              <div
                key={index}
                className="group relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-200"
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Close Icon (Shows only on hover) */}
                <button
                  type="button"
                  onClick={() => handleDeleteImage(index)}
                  className="absolute top-1 right-1 bg-black/70 hover:bg-black text-white p-1 rounded-full md:opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50"
                  aria-label="Delete image"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-3 rounded-md transition-colors text-center"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}
