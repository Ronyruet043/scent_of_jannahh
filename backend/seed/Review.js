const Review = require("../models/Review");

const reviews = [

  {
    _id: "65c25b9bdcd9253acfbaab8d",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f59944a2",
    rating: 3,
    comment:
      "Not As Dark As Expected. The tint on these sunglasses isn't as dark as advertised, offering less sun protection than anticipated. Choose lenses with a darker tint for strong sunlight conditions.",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
];

exports.seedReview = async () => {
  try {
    await Review.insertMany(reviews);
    console.log("Review seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
