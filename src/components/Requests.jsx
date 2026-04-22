import React, { useEffect } from "react";
import BASE_URL from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import UserCard from "./UserCard";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);

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
                <button className="btn btn-success">Accept</button>
                <button className="btn btn-warning">Reject</button>
              </>
            }
          />
        ))}
      </div>
      
    </div>
  );
};

export default Requests;
