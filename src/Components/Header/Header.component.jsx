import React from "react";
import "./Header.styles.scss";
import logo from "/assets/images/logo.svg";

import MetricInput from '../MetricInput/MetricInput';
import UnitSelect from "../UnitSelect/UnitSelect";

const HeaderContainer = () => {
  return (
    <div className="header-container flex justify-start gap-32 pt-16">
      <div className=" ml-8 w-[25rem]">
        <img src={logo} alt="logo" className="w-12" />
        <h1 className="font-bold text-[3rem] mt-32 mb-4">
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
      <div className="">
        <article className="bg-white shadow-xl w-[35.2rem] p-8 rounded-xl ">

            <UnitSelect />
            <MetricInput />

        
        </article>
      </div>
    </div>
  );
};

export default HeaderContainer;
