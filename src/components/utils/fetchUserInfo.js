import getUserInfo from "../../api/getUserInfo";

export default async function fetchUserInfo(email) {
  try {
    const userDataFromApi = await getUserInfo(email);
    if (userDataFromApi.length > 0) {
      console.log(JSON.stringify(userDataFromApi));
      throw new Error("User already exists");
    }
  } catch (error) {
    throw new Error(error);
  }
}
