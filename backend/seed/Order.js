const Order = require("../models/Order");
const fs = require("fs");

const orders = [
  
  {
    _id: "65c266eab53f820728d0763f",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        _id: "65c266dab53f820728d07632",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f59944ae",
          title: "Metal Ceramic Flower",
          description:
            "Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp",
          price: 35,
          discountPercentage: 10.94,
          stockQuantity: 146,
          brand: { _id: "65a7e20102e12c44f5994425", name: "Ifei Home" },
          category: "65a7e24602e12c44f599443f",
          thumbnail:
            "https://cdn.dummyjson.com/product-images/97/thumbnail.jpg",
          images: [
            "https://cdn.dummyjson.com/product-images/97/1.jpg",
            "https://cdn.dummyjson.com/product-images/97/2.jpg",
            "https://cdn.dummyjson.com/product-images/97/3.jpg",
            "https://cdn.dummyjson.com/product-images/97/4.webp",
            "https://cdn.dummyjson.com/product-images/97/thumbnail.jpg",
          ],
          isDeleted: false,
        },
        quantity: 4,
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "Bangladesh",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "COD",
    total: 150.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
];

exports.seedOrder = async () => {
  try {
    await Order.insertMany(orders);
    console.log("Order seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
