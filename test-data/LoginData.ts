export const InvalidLoginData = [
  {
    case: "InvalidUsernameValidPassword",
    username: "invalidUsername",
    password: "test",
  },
  {
    case: "ValidUsernameInvalidPassword",
    username: "Tester",
    password: "invalidPassword",
  },
  {
    case: "InvalidUsernameInvalidPassword",
    username: "invalidUsername",
    password: "invalidPassword",
  },
];

export const ValidLoginData = {
  username: "Tester",
  password: "test",
};
