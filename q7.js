const student = Object.freeze({
  name: "Chidi",
  address: { city: "Lokoja" }
});

student.address.city = "Abuja";

console.log(student.address.city);