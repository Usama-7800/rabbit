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
  shippingAddress:{

  }
};
export default function OrderConfirmation() {
  return (
    <div>
      OrderConfirmation
    </div>
  )
}
