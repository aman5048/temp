import React, { useState, useEffect } from "react";
import { Divide } from "react-feather";
import "./stylecrousal.componet.css";
function ResponsiveCarousel() {
  const slides = [
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
    // <div className="carousel w-full">
    //   <div id="slide1" className="carousel-item relative w-full">
    //     <img
    //       src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
    //       className="w-full"
    //     />
    // <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //   <a href="#slide4" className="btn btn-circle">
    //     ❮
    //   </a>
    //   <a href="#slide2" className="btn btn-circle">
    //     ❯
    //   </a>
    // </div>
    //   </div>
    //   <div id="slide2" className="carousel-item relative w-full">
    //     <img
    //       src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
    //       className="w-full"
    //     />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide1" className="btn btn-circle">
    //         ❮
    //       </a>
    //       <a href="#slide3" className="btn btn-circle">
    //         ❯
    //       </a>
    //     </div>
    //   </div>
    //   <div id="slide3" className="carousel-item relative w-full">
    //     <img
    //       src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
    //       className="w-full"
    //     />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide2" className="btn btn-circle">
    //         ❮
    //       </a>
    //       <a href="#slide4" className="btn btn-circle">
    //         ❯
    //       </a>
    //     </div>
    //   </div>
    //   <div id="slide4" className="carousel-item relative w-full">
    //     <img
    //       src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
    //       className="w-full"
    //     />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide3" className="btn btn-circle">
    //         ❮
    //       </a>
    //       <a href="#slide1" className="btn btn-circle">
    //         ❯
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div className="w-screen sm:h-1/3 md:h-1/3 lg:h-1/3 xl:h-100  overflow-clip crousel">
      <div className=" crousel-item relative w-full">
        <img className="h-full w-full crousel-image" src={slides[idx]} alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            onClick={() => setidx(idx === 0 ? slides.length - 1 : idx - 1)}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            onClick={() => setidx(idx === slides.length - 1 ? 0 : idx + 1)}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveCarousel;
