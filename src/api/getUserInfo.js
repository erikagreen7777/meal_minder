export const getUserInfo = async (email) => {
  const encodedEmail = encodeURIComponent(email);
  try {
    const response = await fetch(`/userExists?email=${encodedEmail}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
    // console.log(json);
  } catch (error) {
    // console.log(error);
    throw new Error("Error fetching user info", error);
  }
};
