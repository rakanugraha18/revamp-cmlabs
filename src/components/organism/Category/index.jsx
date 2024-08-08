import React from "react";
import InputForm from "../../atoms/Input";
import Button from "../../atoms/Button";

function Category() {
  return (
    <div className="flex justify-center flex-col bg-[#F1F4F9] ">
      <div className="flex w-full max-w-screen-xl flex-wrap justify-between p-3 md:px-[233px] md:py-[45px] mx-auto">
        <div>
          <h2 className="text-[16px] font-medium">Join Our Newsletter</h2>
          <p className="text-[12px]">Find design inspiration for your home</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Category;
