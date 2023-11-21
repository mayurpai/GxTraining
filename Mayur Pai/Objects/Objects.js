const person = {
  name: "Mayur",
  age: 23,
  address: {
    pin: 575018,
    state: "Karnataka",
    city: "Mangalore",
  },
};

function displayer({ name, address: { pin } }) {
  console.log(name);
  console.log(pin);
}
displayer(person);
