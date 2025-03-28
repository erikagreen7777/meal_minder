import { createUser } from "../../api/createUser";

export default async function sendCreateUser(userData) {
  const { email, firstName, lastName, password } = userData;
  try {
    const response = await createUser({
      email,
      firstName,
      lastName,
      password,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
