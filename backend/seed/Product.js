const Product = require("../models/Product");

const products = [
  {
    _id: "65a7e45902e12c44f59944b1",
    title: "Crystal chandelier maria theresa for 12 light",
    description: "Crystal chandelier maria theresa for 12 light",
    price: 47,
    discountPercentage: 16,
    stockQuantity: 133,
    brand: "65a7e20102e12c44f5994427",
    category: "65a7e24602e12c44f599443f",
    thumbnail: "https://cdn.dummyjson.com/product-images/100/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/100/1.jpg",
      "https://cdn.dummyjson.com/product-images/100/2.jpg",
      "https://cdn.dummyjson.com/product-images/100/3.jpg",
      "https://cdn.dummyjson.com/product-images/100/thumbnail.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
];

exports.seedProduct = async () => {
  try {
    await Product.insertMany(products);
    console.log("Product seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
