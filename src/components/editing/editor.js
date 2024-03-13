import React, { useState } from "react";

function Editor() {
  const Tshirt = [
    "https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uGWNChQSufuNJcxT8PCoRstN4EmorBveac2W9X3EGQ&s",
  ];
  const print = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87zShCzj1E_b1EWT0Xusw3byziWSnz2bg7A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kMlUuXZ4zL3EqAMU1OixBmh3Ll7lJvwzxQ&usqp=CAU",
  ];
  const [printSize, setPrintSize] = React.useState(100);
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <div 
        className=" rounded-lg bg-slate-300 px-10  "
        id="left "
      >
        <div
          className="rounded-lg relative px-10 bg-red-500 "
        >
        <img src={Tshirt[0]} alt="Image 1" className="w-full h-full" />
        <div className="absolute mix-blend-multiply top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            className={`w-${printSize} h-${printSize} bg-transparent mix-blend-multiply rounded-lg`}
            src={print[0]}
            alt="Image 2"
          />
        </div>
        {/* <button 
            onClick={() => setPrintSize(printSize < 100 ? printSize + 10 : 100)}
            className="absolute bottom-0 right-0 m-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            +
          </button>
          <button 
            onClick={() => 
              {
                setPrintSize(printSize > 10 ? printSize - 10 : 10)
                console.log(printSize)
              }
            }
            className="absolute bottom-0 left-0 m-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
          >
            -
          </button> */}
        </div>
        
      </div>
      <div
        className="h-full bg-slate-600 grid rounded-lg grid-rows-3 lg:col-span-1"
        id="right"
      >
        <div className="row-span-0 bg-blue-500">
          <div className="overflow-x-scroll  max-h-full">
            <div className="flex space-x-3">
              {print.map((src, i) => (
                <img key={i} src={src} alt={`Image ${i}`} className=" inline " />
              ))}
            </div>
          </div>
        </div>
        <div className="row-span-2 bg-black"></div>
      </div>
    </div>
  );
}

export default Editor;
