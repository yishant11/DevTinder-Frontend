import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";

const Profle = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className="flex justify-center gap-6 my-4 mx-6">
      {user && <EditProfile user={user} />}
    </div>
  )
};

export default Profle;
