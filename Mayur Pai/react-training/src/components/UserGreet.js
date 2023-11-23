const userProfile = {
  firstName: "Mayur",
  lastName: "Pai",
};

function greeting(user) {
  return user.firstName + " " + user.lastName;
}

export const greeter = <h1>Hello, {greeting(userProfile)}</h1>;
