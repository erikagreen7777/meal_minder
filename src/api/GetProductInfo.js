export const GetProductInfo = async (result) => {
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v2/product/${result}?product_type=food&fields=product_name%2Cserving_size%2Cnutriments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    const { ...product_info } = data;
    return product_info;
  } catch (error) {
    throw new Error(error);
  }
};
