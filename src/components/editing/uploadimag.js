import React, { useState } from "react";

function Uploadimag(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <>
      <div className="flex items-center justify-center px-8">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form className="py-6 px-9">
            <div className="mb-4 pt-4">
              <div className="mb-4">
                <input type="file" name="file" id="file" className="sr-only" />
                <label
                  htmlFor="file"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    {selectedImage && (
                      <img src={URL.createObjectURL(selectedImage)} />
                    )}
                  </div>
                </label>
              </div>
            </div>

            <div>
              <button
                onClick={($event) => props.print(selectedImage, $event)}
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Upload Image
              </button>

              <span>
                <input
                  className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 cursor-pointer px-8 text-center text-base font-semibold text-white outline-none "
                  type="file"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Uploadimag;
