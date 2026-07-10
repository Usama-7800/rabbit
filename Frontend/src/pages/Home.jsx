import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import FeatureCollection from "../components/Products/FeatureCollection";
import FeatureSection from "../components/Products/FeatureSection";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
  {
    _id: "1",
    name: "Classic Denim Jacket",
    price: "79.99",
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Classic Denim Jacket Front View"
      }
    ]
  },
  {
    _id: "2",
    name: "Crewneck Cotton Sweatshirt",
    price: "45.00",
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Crewneck Cotton Sweatshirt Flat Lay"
      }
    ]
  },
  {
    _id: "3",
    name: "Slim-Fit Chino Pants",
    price: "59.95",
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Slim-Fit Chino Pants Side Profile"
      }
    ]
  },
  {
    _id: "4",
    name: "Oversized Linen Shirt",
    price: "39.99",
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Oversized Linen Shirt Hanging View"
      }
    ]
  },
  {
    _id: "5",
    name: "Minimalist Leather Sneakers",
    price: "120.00",
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Minimalist Leather Sneakers Studio Shot"
      }
    ]
  },
  {
    _id: "6",
    name: "Minimalist Leather Sneakers",
    price: "120.00",
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Minimalist Leather Sneakers Studio Shot"
      }
    ]
  },
  {
    _id: "7",
    name: "Minimalist Leather Sneakers",
    price: "120.00",
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Minimalist Leather Sneakers Studio Shot"
      }
    ]
  },
  {
    _id: "8",
    name: "Minimalist Leather Sneakers",
    price: "120.00",
    images: [
      {
        url: "https://picsum.photos/500/500?random=8",
        altText: "Minimalist Leather Sneakers Studio Shot"
      }
    ]
  },
];
export default function Home() {
  return (
    <>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* best seller */}
      <h2 className="text-3xl text-center font-bold mb-4 ">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto ">
        <h2 className="text-3xl text-center font-bold mb-4">Top Wears For women</h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeatureCollection />
      <FeatureSection />
    </>
  );
}
