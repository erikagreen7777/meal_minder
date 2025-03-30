export const authenticateUser = async (userData) => {
  try {
    const response = await fetch("/authenticateUser", {
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
    return json;
  } catch (error) {
    throw new Error(
      `There was an issue logging in. Please check your email and password`
    );
  }
};
