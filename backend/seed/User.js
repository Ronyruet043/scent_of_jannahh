const User = require("../models/User");

const users = [

  {
    _id: "65c2526fdcd9253acfbaa731",
    name: "Abcd",
    email: "demo1@gmail.com",
    password: '$2a$10$tosjkprqtomSah0VJNyKi.TIv1JU65pl1i1IJ6wUttjYw.ENF99jG',
    isVerified: true,
    isAdmin: false,
    __v: 0,
  },
];

exports.seedUser = async () => {
  try {
    await User.insertMany(users);
    console.log("User seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
