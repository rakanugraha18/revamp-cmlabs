import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASEURL;
const registerUser = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/customers/register`,
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default registerUser;
