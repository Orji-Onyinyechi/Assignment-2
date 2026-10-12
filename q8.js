const userOne = {
  name: "Amaka",
  address: { city: "Lokoja" }
};

const userTwo = { ...userOne };

userTwo.address.city = "Abuja";

console.log(userOne.address.city);