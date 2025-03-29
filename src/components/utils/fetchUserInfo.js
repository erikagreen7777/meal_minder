import getUserEmail from "../../api/getUserEmail";

export default async function fetchUserInfo(email) {
  // console.log("hi from fetchUserInfo", email);
  try {
    const userDataFromApi = await getUserEmail(email);
    console.log("userDataFromApi", JSON.stringify(userDataFromApi));
    return userDataFromApi[0];
  } catch (error) {
    throw new Error(error);
  }
}
