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
        <div className="p-6 rounded-xl ">
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
          {/* orderd items  */}
          <div className="space-y-4">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center gap-4 p-4  rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">Color: {item.color}</p>
                  <p className="text-gray-500">Size: {item.size}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          {/* payment and delivery details  */}
          <div className="grid grid-cols-2 gap-8">
            {/* payment info  */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Payment</h2>
              <p className="text-gray-600">Paypal</p>
            </div>
            {/* delivery info  */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Delivery</h2>
              <p className="text-gray-600">{checkout.shippingAddress.address}</p>
              <p className="text-gray-600 ">{checkout.shippingAddress.city}, {" "}{checkout.shippingAddress.country} </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
