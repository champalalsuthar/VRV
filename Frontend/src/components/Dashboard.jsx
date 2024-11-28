import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../utils/api";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.auth.userRole);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const _id = localStorage.getItem("id");

    if (!_id) {
      setError("User ID not found");
      setLoading(false);
      // dispatch(logout());
      // dispatch(setUserData(null));
      return;
    }

    const fetchData = async () => {
      try {
        const response = await api.post("/api/getuserdatabyid", { _id });
        console.log(response)
        console.log(response.data)
        // dispatch(login({ token: response.data.token, role: response.data.user.type })); // Assuming backend provides token and role
        // navigate("/dashboard");
        // const data = await fetchUserById(userId);
        setUserDetails(response.data.user);
        // dispatch(setUserData(data));
      } catch (err) {
        console.error("Login failed", error)
        setError("Login failed");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  console.log(userDetails)
  return (
    <div className="w-full  bg-white p-6 mt-20 ">
      <div className="dashboard">
        <h2>Welcome to the Dashboard</h2>
        {userRole === "admin" && <p>Admin Controls</p>}
        {userRole === "Moderator" && <p>Moderator Controls</p>}
        <p>User Role: {userRole}</p>
      </div>
      <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            {/* <img
              className="h-48 w-[90%] md:w-48 object-cover m-[5%] my-8"
              src={userDetails?.cover || "/userprofileimage.jpeg"}
              alt="Profile"
            /> */}
          </div>
          <div className="p-8">
            <a
              className="block mt-1 text-lg leading-tight font-medium text-black "
            >
              {userDetails.first_name} {userDetails.last_name}
            </a>
            <p className="mt-2 text-gray-500"> {userDetails.email}</p>
            <a className="text-blue-500 ">
              {userDetails.country_code} {userDetails.mobile}
            </a>

            {/* <div className="mt-4  flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Premium Luxury Traveller (2018-2020)
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Top 1% Satisfied Customer (2019)
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Top 10% Sales Reviewer (2021)
              </span>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
