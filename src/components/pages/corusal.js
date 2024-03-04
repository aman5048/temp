import React,{useState,useEffect} from "react";
import { Divide } from "react-feather";


function ResponsiveCarousel() {
  const slides=[
    "https://www.creativefabrica.com/wp-content/uploads/2022/06/22/Fashion-Sale-Social-Media-Carousel-Graphics-32166085.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/32acbf101924369.5f2a92935a4ad.jpg"
  ]
  const [idx,setidx]=useState(0);
  useEffect(()=>{
    const interval=setInterval(()=>{
      setidx(idx === (slides.length-1) ? 0:idx+1)
    },4000);
    return ()=>clearInterval(interval);
  },[idx]);
  return ( 
    <div className="w-full bg-slate-500 xl:h-4/6 md:h-3/6 lg:h-2/6 sm:h-1/4   ">
      <button>prev</button>
      <img className="w-full xl:h-full " src={slides[idx]} alt=""/>
      <button>next</button>
    </div>  
  );
}

export default ResponsiveCarousel;