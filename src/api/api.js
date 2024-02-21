import axios from "axios";

export async function productsData() {
  try {
    const response = await axios.get(
      "https://fakestoreapiserver.vercel.app/amazonproducts"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
