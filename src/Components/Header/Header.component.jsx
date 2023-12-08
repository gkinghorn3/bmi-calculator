import { useState, useEffect } from "react";
import "./Header.styles.scss";

import MetricInput from "../CalcItems/MetricInput/MetricInput";
import ImperialInput from "../CalcItems/ImperialInput/ImperialInput";
import UnitSelect from "../CalcItems/UnitSelect/UnitSelect";
import ResultContainer from "../CalcItems/ResultContainer/ResultContainer";
import HeaderIntro from "./headerIntro/HeaderIntro";

const HeaderContainer = () => {
  const [bmi, setBmi] = useState(0);
  const [selectedUnits, setSelectedUnits] = useState("metric");

  const [metricMeasurements, setMetricMeasurements] = useState({
    height: 0,
    weight: 0,
  });

  const [imperialMeasurements, setImperialMeasurements] = useState({
    height: {
      feet: 0,
      inches: 0,
    },
    weight: {
      stone: 0,
      pounds: 0,
    },
  });

  const calculateBMI = () => {
    let bmi = 0;

    // Check if metric measurements are set
    if (metricMeasurements.height > 0 && metricMeasurements.weight > 0) {
      // Calculate BMI using metric measurements
      bmi = metricMeasurements.weight / (metricMeasurements.height / 100) ** 2;
    } else {
      
      const totalHeightInInches =
      (parseFloat(imperialMeasurements.height.feet) || 0) * 12 +
      (parseFloat(imperialMeasurements.height.inches) || 0);


    const totalWeightInPounds =
    (parseFloat(imperialMeasurements.weight.stone) || 0) * 14 +
    (parseFloat(imperialMeasurements.weight.pounds) || 0);
    
  if (totalHeightInInches > 0 && totalWeightInPounds > 0) {
    // Calculate BMI using imperial measurements and convert to metric
    bmi = parseFloat((totalWeightInPounds / (totalHeightInInches ** 2)) * 703);
  }

  };

  setBmi(parseFloat(bmi.toFixed(1)));
}

 

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateBMI();
    }, 800); 
  
    
    return () => clearTimeout(timer);
    
  }, [metricMeasurements, imperialMeasurements]);

  useEffect(() => {
    setMetricMeasurements({ height: 0, weight: 0 });
    setImperialMeasurements({
      height: {
        feet: 0,
        inches: 0,
      },
      weight: {
        stone: 0,
        pounds: 0,
      },
    });

    
  }, [selectedUnits]);

  return (
    <div className="mx-auto header-container flex flex-col justify-between lg:flex-row lg:justify-start w-[90%] gap-8 md:p-16 pt-16">
      <HeaderIntro />
      <div className="lg:mt-20">
        <article className="bg-white shadow-xl w-[90%] mx-auto lg:w-[35.2rem] p-8 rounded-xl flex flex-col gap-12 ">
          <UnitSelect
            setSelectedOption={setSelectedUnits}
            selectedUnits={selectedUnits}
          />
          {selectedUnits === "imperial" ? (
            <ImperialInput
              imperialMeasurements={imperialMeasurements}
              setImperialMeasurements={setImperialMeasurements}
            />
          ) : (
            <MetricInput
              metricMeasurements={metricMeasurements}
              setMetricMeasurements={setMetricMeasurements}
            />
          )}

          <ResultContainer bmiNumber={bmi} />
        </article>
      </div>
    </div>
  );
};

export default HeaderContainer;
