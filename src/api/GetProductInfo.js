export const getProductInfo = async (result) => {
  try {
    const response = await fetch(
      `https://world.openfoodfacts.net/api/v2/product/${result}?product_type=food&fields=serving_quantity_unit%2Ccategories_tags%2Cimage_small_url%2Clabels_tags%2Cquantity%2Cnutriscore_grade%2Cserving_quantity%2Cproduct_name%2Cserving_size%2Cnutriments`,
      // Potential tags: nutriscore_grade, quantity, serving_quantity, serving_quantity_unit
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
