function getType(value) {
  if (value === null) {
    return "null";
  }

  if (Array.isArray(value)) {
    return "array";
  }

  if (typeof value === "function") {
    return "function";
  }

  return typeof value;
}

const values = [
  42,
  "42",
  true,
  null,
  undefined,
  [1, 2, 3],
  { a: 1 },
  function () {},
  NaN
];

for (const value of values) {
  console.log(getType(value));
}