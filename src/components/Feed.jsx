import axios from "axios";
import BASE_URL from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect, useCallback } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = useCallback(async () => {
    if (feed) return;
    try {
      const res = await axios.get(`${BASE_URL}/user/feed`, {
        withCredentials: true,
      });
      console.log("Feed API response:", res.data.data);
      dispatch(addFeed(res.data.data));
    } catch (error) {
      console.log(error);
    }
  }, [feed, dispatch]);



  useEffect(() => {
    getFeed();
  }, [getFeed]);

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Discover People</h1>
        {feed && feed.length > 0 ? (
          <UserCard 
            user={feed[0]}
          />
        ) : feed ? (
          <div className="text-center text-gray-600">
            <p>No more people to discover</p>
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p>Loading people...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
