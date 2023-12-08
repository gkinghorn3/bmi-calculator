import React from "react";
import "./Header.styles.scss";
import logo from "/assets/images/logo.svg";

import MetricInput from "../MetricInput/MetricInput";
import UnitSelect from "../UnitSelect/UnitSelect";

const HeaderContainer = () => {
  return (
    <div className="mx-auto header-container flex flex-col lg:flex-row lg:justify-start w-[90%] gap-16 pt-16">
      <div className=" mx-auto lg:mx-24 w-[80%] lg:w-[25rem] text-center lg:text-left ">
        <img src={logo} alt="logo" className="w-12" />
        <h1 className="font-bold text-[3rem] mt-4 lg:mt-32 mb-4">
          {" "}
          Body Mass Index Calculator
        </h1>
        <p className="text-base">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <div className="lg:mt-20">
        <article className="bg-white shadow-xl w-[90%] mx-auto lg:w-[35.2rem] p-8 rounded-xl flex flex-col gap-12 ">
          <UnitSelect />
          <MetricInput />
          <div
            id="result-container"
            className="bg-gradient-to-l from-blue-500 to-indigo-600
                text-white p-5 flex justify-center items-center"
          >
            <div className="flex flex-col justify-start w-[40%]">
              <p>Your BMI is...</p>
              <h3 className="font-bold text-[4rem]">45</h3>
            </div>
            <div className="w-[40%]">
              <p className="text-sm">
                Your BMI suggests you're <span>A HEALTHY WEIGHT</span>. Your ideal weight is between <span>62.KG</span> and <span>80KG</span>.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default HeaderContainer;
