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
              className={`w-[20px] h-5 ${
                i < rating ? "bg-[#F4A88e]" : "bg-[#E4E4E4]"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingClass;
