import React, { useEffect } from "react";
import BASE_URL from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import UserCard from "./UserCard";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        {
          withCredentials: true,
        },
      );
      const reviewRequestData = res.data.data;
      console.log("Review requests are here:", reviewRequestData);
    } catch (error) {
      console.log("Error in review request:", error);
    }
  };

  const fetchRequest = async () => {
    const res = await axios.get(BASE_URL + "/user/requests/received", {
      withCredentials: true,
    });
    const requestsData = res.data.data;
    dispatch(addRequest(requestsData));
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requests || requests.length === 0) {
    return (
      <div className="p-4">
        <div className="text-2xl font-bold text-center mb-6">REQUESTS</div>
        <div className="text-center text-gray-500">No requests found</div>
      </div>
    );
  }
  return (
    <div className="p-4">
      <div className="text-2xl font-bold text-center mb-6">REQUESTS</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {requests.map((request) => (
          <UserCard
            key={request._id}
            user={request.fromUserId}
            actions={
              <>
                <div className="mt-4 flex gap-2">
                  <button className="btn btn-error" onClick={() => reviewRequest("ignored", request._id)}>Ignore</button>
                  <button className="btn btn-primary" onClick={() => reviewRequest("accepted", request._id)}>Interested</button>
                </div>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Requests;
