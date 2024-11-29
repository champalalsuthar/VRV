import axios from "axios";
import SITE_CONFIG from "../Controller/SiteController";

export const userLogin = async (data) => {
    // console.log(data);
    try {
        const response = await axios.post(
            `${SITE_CONFIG.apiIPMongo}/api/login`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${SITE_CONFIG.apiToken}`,
                },
            }
        );
        console.log(response);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error to login:", error);
        throw new Error(error.response.data.error || "An error occurred");
    }
};
