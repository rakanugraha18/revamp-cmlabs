import axios from "axios";

const getApiProduct = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASEURL}/products`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error; // throw error to handle it in the component
  }
};

export default getApiProduct;
