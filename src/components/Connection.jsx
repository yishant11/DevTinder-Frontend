import React, { useEffect} from 'react'
import axios from 'axios'
import  BASE_URL  from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/connectionSlice'
import UserCard from './UserCard'

const Connection = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connection);
    const handleconnection = async () => {
        const res = await axios.get(`${BASE_URL}/user/connection`,{
            withCredentials: true
        },)
        console.log(res);
        dispatch(addConnection(res.data.data));
        console.log("connections after dispatch", connections);
    }
    useEffect(() => {
        handleconnection()
    }, [])

    if(!connections) return null;

    if(connections.length === 0) {
        return (
            <div className="p-4">
                <div className="text-2xl font-bold text-center mb-6">ALL MY CONNECTIONS</div>
                <div className="text-center text-gray-500">No connections found</div>
            </div>
        )
    }
  return (
    <div className="p-4">
      <div className="text-2xl font-bold text-center mb-6">ALL MY CONNECTIONS</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {connections && connections.map((connection) => (
          <UserCard key={connection._id} user={connection} />
        ))}
      </div>
    </div>
  )
}

export default Connection