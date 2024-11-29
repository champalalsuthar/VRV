import axios from "axios";
import SITE_CONFIG from "../Controller/SiteController";

export const register = async (data) => {
    try {
        const response = await axios.post(
            `${SITE_CONFIG.apiIPMongo}/api/register`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${SITE_CONFIG.apiToken}`,
                },
            }
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error to register:", error);
        console.error("Error to register:", error.response.data.error);
        // if (error.response && error.response.status === 400) {
        //   return {
        //     success: false,
        //     message: error.response.data.message || "Validation error",
        //   };
        // }
        throw new Error(error.response.data.error || "An error occurred");
    }
};
