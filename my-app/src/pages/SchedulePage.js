import MobileNav from "../components/MobileNav";
import UserContext from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import Schedule from "../components/Schedule";
import { Link } from "react-router-dom";
const SchedulePage = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/api/v1/users/${user.userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setData(data.classes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSchedule();
  }, [user]);

  return (
    <div className="mx-4">
      <MobileNav></MobileNav>
      <div className="mt-2">
        <h1 className="text-[50px]">My Schedule</h1>
      </div>
      <div className="mt-4">
        {/* map over data and print schedule with children */}
        {data.map((data) => (
          <div className="mt-10">
            <Schedule id={data.id}>
              <p className="text-[22px]">{data.classDay}</p>
              <p className="ml-auto text-[22px]">{data.classTime}</p>
            </Schedule>
            <Link to={`/classdetails/${data.id}`}>
              <div className="border-b-2 border-dotted border-black pb-2 mb-7">
                <h2 className="text-[28px]">{data.className}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
