import axios from "axios";
import { useEffect, useState } from "react";
const RatingClass = ({ classId }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const getRatings = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/classes/${classId}/ratings`
        );
        setRating(res.data[0].rating);
      } catch (err) {
        console.log(err);
      }
    };
    getRatings();
  }, [classId]);

  return (
    <div>
      <div className="flex w-[100px] h-10 mt-2">
        {[...Array(5)].map((_, i) => {
          return (
            <div
              key={i}
              className={
                i < rating
                  ? "w-[20px] h-5 " + "bg-[#F4A88e]"
                  : "w-[20px] h-5 " + "bg-[#E4E4E4]"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingClass;
{
  /* <div key="1" className="w-[20px] bg-[#F4A88E] h-5"></div>
        <div key="2" className="w-[20px] bg-[#F4A88E] h-5"></div>
        <div key="3" className="w-[20px] bg-[#F4A88E] h-5"></div>
        <div key="4" className="w-[20px] bg-[#F4A88E] h-5"></div>
        <div key="5" className="w-[20px] bg-slate-200 h-5"></div> */
}
