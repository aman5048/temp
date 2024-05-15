import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Uploadimag from "./uploadimag";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function EditingForm(props) {
  return (
    <div className="bg-white m-4">
      <br />
      {/* color options */}
      <div className="max-w-2xl mx-auto pt-8 pb-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Select Tshirt Color
        </p>
        <RadioGroup
          value={props.selectedColor}
          onChange={props.setSelectedColor}
          className="mt-4"
        >
          <RadioGroup.Label className="sr-only"></RadioGroup.Label>
          <div className="flex items-center space-x-3">
            {props.product.colors.map((color) => (
              <RadioGroup.Option
                key={color.name}
                value={color}
                className={({ active, checked }) =>
                  classNames(
                    color.selectedClass,
                    active && checked ? "ring ring-offset-1" : "",
                    !active && checked ? "ring-2" : "",
                    "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                  )
                }
              >
                <RadioGroup.Label as="span" className="sr-only">
                  {color.name}
                </RadioGroup.Label>
                <span
                  aria-hidden="true"
                  className={classNames(
                    color.class,
                    "h-8 w-8 rounded-full border border-black border-opacity-10"
                  )}
                />
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* size options */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Select your Size
        </p>
      </div>

      <RadioGroup
        value={props.selectedSize}
        onChange={props.setSelectedSize}
        className="mt-3 "
      >
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className="grid  grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
          {props.product.sizes.map((size) => (
            <RadioGroup.Option
              key={size.name}
              onClick={() => props.handleSize(size.name)}
              value={size}
              className={({ active }) =>
                classNames(
                  "cursor-pointer bg-white text-gray-900 shadow-sm",
                  active ? "ring-2 ring-indigo-500" : "",
                  "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                  <span
                    className={classNames(
                      active ? "border" : "border-2",
                      checked ? "border-indigo-500" : "border-transparent",
                      "pointer-events-none absolute -inset-px rounded-md "
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

export default EditingForm;
