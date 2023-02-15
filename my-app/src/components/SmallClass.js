import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {classes &&
        classes.map((item) => (
          <div key={item.id}>
            <div
              key={item.id}
              className="bg-cover h-44 w-[135px] rounded-xl bg-center mt-10 "
              style={{ backgroundImage: `url(${item.asset.url})` }}
            ></div>
          </div>
        ))}
    </Slider>
  );
};

export default SmallClass;
