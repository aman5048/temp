import React, { useState } from "react";
import EditingForm from "./editingForm";
import Uploadimag from "./uploadimag";
import Tshirt from "./pngegg.png";
// import "./images.png";
function Editor() {
  // const Tshirt = [
  //   "https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uGWNChQSufuNJcxT8PCoRstN4EmorBveac2W9X3EGQ&s",
  // ];
  const [print, setPrint] = React.useState(null);
  function handleImageChange(file, e) {
    e.preventDefault();
    console.log(file);
    setPrint(file);
  }
  const [printSize, setPrintSize] = React.useState(10);
  return (
    <div className="grid md:grid-flow-row lg:grid-cols-3 xl:grid-cols-3">
      <div
        className=" rounded-lg bg-slate-300 px-10 h-full col-span-2 "
        id="left "
      >
        <div className="rounded-lg relative   bg-white h-full">
          <img
            src={Tshirt}
            alt="Image 1"
            className=" aspect-square w-full h-full"
          />
          <div className="absolute top-1/4 left-1/4 bottom-1/4 right-1/4 w-1/2  h-1/2 ">
            {print && (
              <img
                className={`w-${printSize} h-${printSize}  rounded-lg`}
                src={URL.createObjectURL(print)}
                alt="Image 2"
              />
            )}
          </div>
          <button
            onClick={() => setPrintSize(printSize < 100 ? printSize + 10 : 100)}
            className="absolute bottom-0 right-0 m-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            +
          </button>
          <button
            onClick={() => {
              setPrintSize(printSize > 10 ? printSize - 10 : 10);
              console.log(printSize);
            }}
            className="absolute bottom-0 left-0 m-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
          >
            -
          </button>
        </div>
      </div>
      <div className=" rounded-lg min-h-40 lg:col-span-1" id="right">
        <Uploadimag print={handleImageChange} />
        <EditingForm />
      </div>
    </div>
  );
}

export default Editor;
