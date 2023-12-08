import { useState } from "react";
import "./Header.styles.scss";


import MetricInput from "../CalcItems/MetricInput/MetricInput";
import ImperialInput from "../CalcItems/ImperialInput/ImperialInput";
import UnitSelect from "../CalcItems/UnitSelect/UnitSelect";
import ResultContainer from "../CalcItems/ResultContainer/ResultContainer";
import HeaderIntro from "./headerIntro/HeaderIntro";

const HeaderContainer = () => {

  const [selectedUnits, setSelectedUnits] = useState("metric");

  

  const calculateBMI = () => {
    let bmi;
  
    // Check if metric measurements are set
    if (metricMeasurements.height > 0 && metricMeasurements.weight > 0) {
      // Calculate BMI using metric measurements
      bmi = metricMeasurements.weight / ((metricMeasurements.height / 100) ** 2);
    } else {
      // Convert height from feet & inches to inches
      const totalHeightInInches = imperialMeasurements.height.feet * 12 + imperialMeasurements.height.inches;
      // Convert weight from stone & pounds to pounds
      const totalWeightInPounds = imperialMeasurements.weight.stone * 14 + imperialMeasurements.weight.pounds;
      // Calculate BMI using imperial measurements and convert to metric
      bmi = (totalWeightInPounds / (totalHeightInInches ** 2)) * 703;
    }
  
    return bmi;
  };

  return (
    <div className="mx-auto header-container flex flex-col justify-between lg:flex-row lg:justify-start w-[90%] gap-8 md:p-16 pt-16">
      <HeaderIntro />
      <div className="lg:mt-20">
        <article className="bg-white shadow-xl w-[90%] mx-auto lg:w-[35.2rem] p-8 rounded-xl flex flex-col gap-12 ">
          <UnitSelect setSelectedOption={setSelectedUnits} selectedUnits={selectedUnits}/>
          {selectedUnits === 'imperial' ? <ImperialInput /> : <MetricInput />}
   
          <ResultContainer />
        </article>
      </div>
    </div>
  );
};

export default HeaderContainer;
