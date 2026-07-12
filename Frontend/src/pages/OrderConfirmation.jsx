const checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/200/250?random=1",
    },
    {
      productId: "2",
      name: "T-Shirt",
      color: "white",
      size: "L",
      price: 45,
      quantity: 2,
      image: "https://picsum.photos/200/250?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Fashion Street",
    city: "New Yark",
    country: "USA"

  }
};
const calculateEstimatedDelivery = (createdAt) => {
  const orderDate=new Date(createdAt);
  orderDate.setDate(orderDate.getDate()+5) //date 5 days after order date
  return orderDate.toLocaleDateString();
}
export default function OrderConfirmation() {
  return (
    <div className="max-w-4xl  mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">Thank You For Your Order!</h1>
      {checkout && (
        <div className="p-6 rounded-xl border">
          <div className="flex justify-between mb-20">
            {/* order id & date  */}
            <div>
              <h2 className="text-xl font-semibold">Order ID: {checkout?._id}</h2>
              <p className="text-gray-500 ">Order Date: {new Date(checkout?.createdAt).toLocaleDateString()}</p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-emerald-700 text-sm">Estimated Delivery: {calculateEstimatedDelivery(checkout.createdAt)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
