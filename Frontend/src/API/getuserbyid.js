import axios from "axios";
import SITE_CONFIG from "../Controller/SiteController";

export const getuserbyid = async (id) => {
    // Retrieve the auth token from local storage
    const authToken = localStorage.getItem("token");

    if (!authToken) {
        throw new Error("Authentication token is missing");
    }

    try {
        const response = await axios.post(
            `${SITE_CONFIG.apiIPMongo}/api/getuserdatabyid`,
            { _id: id },
            {
                headers: {
                    AuthToken: authToken,
                    Authorization: `Bearer ${SITE_CONFIG.apiToken}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error to fetch user data:", error);
        throw new Error(error.response.data.error || "An error occurred");
    }
};
