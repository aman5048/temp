import React, { useState, useEffect } from "react";
import EditingForm from "./editingForm";
import Uploadimag from "./uploadimag";
import Black from "./black.png";
import Green from "./green.png";
import Red from "./red.png";
import { useDispatch } from "react-redux";

import "./style.css";
import { createCustomProductAsync } from "./editorSlice";

console.log(Black);
const product = {
  colors: [
    {
      name: "White",
      color: Black,
      class: "bg-white",
      selectedClass: "ring-gray-400",
    },
    {
      name: "Gray",
      color: Black,
      class: "bg-gray-200",
      selectedClass: "ring-gray-400",
    },
    {
      name: "Black",
      color: Black,
      class: "bg-gray-900",
      selectedClass: "ring-gray-900",
    },
    {
      name: "Red",
      color: Red,
      class: "bg-red-900",
      selectedClass: "ring-red-900",
    },
    {
      name: "Blue",
      color: Black,
      class: "bg-blue-900",
      selectedClass: "ring-blue-900",
    },
    {
      name: "Green",
      color: Green,
      class: "bg-green-900",
      selectedClass: "ring-green-900",
    },
  ],
  sizes: [
    { name: "XXS" },
    { name: "XS" },
    { name: "S" },
    { name: "M" },
    { name: "L" },
    { name: "XL" },
    { name: "2XL" },
    { name: "3XL" },
  ],
};
function Editor() {
  const [Tshirt, setTshirt] = React.useState(null);
  if (Tshirt) console.log("tshirt", Tshirt.color);
  const [print, setPrint] = React.useState(null);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  function handleImageChange(file, e) {
    e.preventDefault();
    console.log(file);
    setPrint(file);
  }
  const [printSize, setPrintSize] = React.useState(100);
  function handleSize(nsize) {
    setSelectedSize(nsize);
  }
  console.log(selectedSize);
  function handleCreateProduct(e) {
    e.preventDefault();
    const productData = {
      // color: Tshirt.name,
      size: selectedSize.name,
      pritnUrl: "cabljk",
      price: 500,
    };
    createCustomProductAsync(productData);
  }

  // console.log(CustomProduct);
  return (
    <div className="grid md:grid-flow-row lg:grid-cols-3 xl:grid-cols-3">
      <div className=" rounded-lg  px-10 h-full col-span-2 " id="left ">
        <div className="rounded-lg relative   bg-white h-full items-center">
          {Tshirt ? (
            <img
              src={Tshirt.color}
              alt="Image 1"
              className=" aspect-square w-full h-full"
            />
          ) : (
            <img
              src={Black}
              alt="Image 1"
              className=" aspect-square w-full h-full"
            />
          )}

          <div
            className={`absolute border-white overflow-clip border-dashed border-2 top-1/4   bottom-1/4  w-2/5  h-1/2 mera-center`}
          >
            {print && (
              <img
                style={{ width: `${printSize}%`, height: `${printSize}%` }}
                className={`object-contain   rounded-lg mx-auto my-auto`}
                src={URL.createObjectURL(print)}
                alt="Image 2"
              />
            )}
          </div>
          <button
            onClick={() => setPrintSize(printSize < 200 ? printSize + 10 : 100)}
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
      <div
        className=" rounded-lg min-h-40 lg:col-span-1 justify-center  items-center"
        id="right"
      >
        <Uploadimag print={handleImageChange} />
        <EditingForm
          handleSize={handleSize}
          product={product}
          setSelectedColor={setTshirt}
          selectedColor={setTshirt}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <div className="mb-4 w-full justify-center text-center">
          <form>
            <button
              onClick={handleCreateProduct}
              className="hover:shadow-form mt-4 w-4/5  rounded-md bg-blue-600 hover:bg-blue-400  px-8 py-3 text-center text-base font-semibold text-white outline-none"
            >
              order now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editor;
