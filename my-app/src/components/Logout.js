import UserContext from "../context/UserContext";
import { useContext } from "react";
const Logout = () => {
  const { setUser } = useContext(UserContext);
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div className="text-[28px]" onClick={handleLogOut}>
      Log out
    </div>
  );
};

export default Logout;
