const Wishlist = require("../models/Wishlist");

const wishlistItem = [
  {
    _id: "65c2447032078478e340abd4",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f59944a2",
    createdAt: "2024-02-07T10:11:46.794Z",
    updatedAt: "2024-02-07T10:11:46.794Z",
    note: "Have to buy this for upcoming beach party",
  },
];

exports.seedWishlist = async () => {
  try {
    await Wishlist.insertMany(wishlistItem);
    console.log("Wishlist seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
