import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RatingClass from "./RatingClass";
import ReactLoading from "react-loading";
const SmallClass = () => {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/v1/classes");
        const data = await res.json();
        setClasses(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
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
    <>
      {isLoading ? (
        <ReactLoading type={"bars"} color={"black"} height={50} width={50} />
      ) : (
        <Slider {...settings}>
          {classes &&
            classes.map((item) => (
              <div key={item.id}>
                <img
                  src={item.asset.url}
                  className="bg-cover h-[150px] w-[150px] rounded-xl bg-center mt-10"
                  alt="cover"
                ></img>
                <div className="max-w-[110px]">
                  <p className="text-[22px] truncate mt-1">{item.className}</p>
                </div>
                <RatingClass classId={item.id}></RatingClass>
              </div>
            ))}
        </Slider>
      )}
    </>
  );
};

export default SmallClass;
