import React,{useState} from "react";
import { Divide } from "react-feather";


function ResponsiveCarousel() {
  const slides=[
    "https://www.creativefabrica.com/wp-content/uploads/2022/06/22/Fashion-Sale-Social-Media-Carousel-Graphics-32166085.png",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/32acbf101924369.5f2a92935a4ad.jpg"
  ]
  const [idx,setidx]=useState(0);
  setInterval(()=>{
    setidx(idx+1);
    if(idx== slides.length){
      setidx(0);
    }
  },9000)
  return ( 
    <div className="w-full bg-slate-500">
                    <img src={slides[idx]} className="w-full " alt=""/>
    </div>  
  );
}

export default ResponsiveCarousel;