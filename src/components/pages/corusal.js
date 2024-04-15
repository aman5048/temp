import React, { useState, useEffect } from "react";
import { Divide } from "react-feather";
import "./stylecrousal.componet.css";
function ResponsiveCarousel() {
  const slides = [
    "https://www.creativefabrica.com/wp-content/uploads/2022/06/22/Fashion-Sale-Social-Media-Carousel-Graphics-32166085.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/32acbf101924369.5f2a92935a4ad.jpg",
  ];
  const [idx, setidx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setidx(idx === slides.length - 1 ? 0 : idx + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [idx]);
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="flex">
        <button
          onClick={() => setidx(idx === 0 ? slides.length - 1 : idx - 1)}
          className="h-full w-12 flex items-center justify-center bg-gray-300 rounded-l-lg"
        >
          <Divide size={24} color="black" />
        </button>
        <img
          className="h-full w-full object-cover"
          style={{ width: "100%", height: "100%", clipPath: "inset(0)" }}
          src={slides[idx]}
          alt=""
        />
        <button
          onClick={() => setidx(idx === slides.length - 1 ? 0 : idx + 1)}
          className="h-full w-12 flex items-center justify-center bg-gray-300 rounded-r-lg"
        >
          <Divide size={24} color="black" rotate="180" />
        </button>
      </div>
    </div>
  );
}

export default ResponsiveCarousel;
