export const validUser = {
  username: "student",
  password: "Password123",
};

export const invalidUsers = {
  wrongUsername: { username: "wrong", password: "Password123" },
  wrongPassword: { username: "student", password: "wrong" },
  emptyFields: { username: "", password: "" },
};
