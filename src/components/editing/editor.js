import React, { useState } from "react";
import EditingForm from "./editingForm";
import Uploadimag from "./uploadimag";
import Tshirt from "./pngegg.png";
import "./style.css";
import { createCustomProductAsync } from "./editorSlice";

const product = {
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    { name: "Red", class: "bg-red-900", selectedClass: "ring-red-900" },
    { name: "Blue", class: "bg-blue-900", selectedClass: "ring-blue-900" },
    { name: "Green", class: "bg-green-900", selectedClass: "ring-green-900" },
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
// import "./images.png";
function Editor() {
  // const Tshirt = [
  //   "https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uGWNChQSufuNJcxT8PCoRstN4EmorBveac2W9X3EGQ&s",
  // ];
  const [print, setPrint] = React.useState(null);
  const [CustomProduct, setCustomProduct] = useState({
    tshirtUrl: "",
    image: "",
    size: "",
    price: "500",
  });
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
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
  function handleCustomOrderSubmit() {
    setCustomProduct({
      tshirtUrl:
        "https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uGWNChQSufuNJcxT8PCoRstN4EmorBveac2W9X3EGQ&s",
      printSize: printSize,
      size: selectedSize,
      price: CustomProduct.price,
    });

    const mydata = new FormData();
    mydata.append(
      "tshirtUrl",
      "https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png"
    );
    mydata.append(
      "image",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uGWNChQSufuNJcxT8PCoRstN4EmorBveac2W9X3EGQ&s"
    );
    mydata.append("printSize", printSize);
    mydata.append("selectedSize", selectedSize);
    mydata.append("price", CustomProduct.price);

    fetch("http://localhost:8080/customProducts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mydata),
    }).then((res) => res.json());
  }

  // console.log(CustomProduct);
  return (
    <div className="grid md:grid-flow-row lg:grid-cols-3 xl:grid-cols-3">
      <div className=" rounded-lg  px-10 h-full col-span-2 " id="left ">
        <div className="rounded-lg relative   bg-white h-full items-center">
          <img
            src={Tshirt}
            alt="Image 1"
            className=" aspect-square w-full h-full"
          />
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
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <div className="mb-4 w-full justify-center text-center">
          <button
            type="submit"
            onClick={handleCustomOrderSubmit}
            className="hover:shadow-form mt-4 w-4/5  rounded-md bg-[#6A64F1] px-8 py-3 text-center text-base font-semibold text-white outline-none"
          >
            Save to Galary
          </button>
        </div>
      </div>
    </div>
  );
}

export default Editor;
