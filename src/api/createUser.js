

export const createUser = async (userData) => {
  console.log("postCreateUser", JSON.stringify(userData));
  try {
    const response = await fetch("/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log("response", json);
    return json;
  } catch (error) {
    console.log(error);
    throw new Error(`Error creating new user: ${error.message}`);
  }
};
