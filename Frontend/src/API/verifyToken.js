import axios from "axios";
import SITE_CONFIG from "../Controller/SiteController";

export const verifyToken = async (token) => {
  console.log(token);
  try {
    const response = await axios.post(
      `${SITE_CONFIG.apiIPMongo}/api/verifytoken`,
      {},
      {
        headers: {
          AuthToken: token,
          Authorization: `Bearer ${SITE_CONFIG.apiToken}`,
        },
      }
    );
    console.log(response);
    console.log(response?.data);
    return response.data;
  } catch (error) {
    console.error("Error to login:", error);
    throw new Error(error.response.data.error || "An error occurred");
  }
};
