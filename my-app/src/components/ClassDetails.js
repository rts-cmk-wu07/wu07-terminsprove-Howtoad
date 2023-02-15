import { IoTriangle } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RatingClass from "./RatingClass";
import Schedule from "./Schedule";

const ClassDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/v1/classes/${id}`);
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchClass();
  }, [id]);

  return (
    <div>
      {data && (
        <>
          <div className="relative">
            <div className="absolute flex text-[#F4A88e] left-2 top-2">
              <IoTriangle className="rotate-[270deg]" size={20} />
              <p>Back</p>
            </div>
            <div className="absolute bottom-2 text-white text-[50px] max-w-[60%] left-6">
              <h1>{data.className}</h1>
              <RatingClass classId={data.id} />
            </div>
            <div className="absolute right-0 bottom-10 text-[28px]">
              <button className="buttonStyle px-6">Sign Up</button>
            </div>

            <img
              src={data.asset.url}
              className="h-96 w-full object-cover"
            ></img>
          </div>
          <div className="mx-5 mt-2">
            <h3 className="text-[28px]">Schedule</h3>
            <Schedule>
              <p className="text-[22px]">{data.classDay}</p>
              <p className="ml-auto text-[22px]">{data.classTime}</p>
            </Schedule>
            <div className="mt-10">
              <p className="text-[28px]">{data.classDescription}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClassDetails;
