import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RatingClass from "./RatingClass";
const SmallClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/v1/classes");
        const data = await res.json();
        setClasses(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchClasses();
  }, []);
  const settings = {
    infinite: false,
    slidesToShow: 2.3,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {classes &&
        classes.map((item) => (
          <div key={item.id}>
            <img
              src={item.asset.url}
              className="bg-cover h-[150px] w-[150px] rounded-xl bg-center mt-10"
            ></img>
            <div className="max-w-[110px]">
              <p className="text-[22px] truncate mt-1">{item.className}</p>
            </div>
            <RatingClass classId={item.id}></RatingClass>
          </div>
        ))}
    </Slider>
  );
};

export default SmallClass;

// bg-cover h-44 w-[150px] rounded-xl bg-center mt-10
