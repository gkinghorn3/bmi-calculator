import { useState, useEffect, useContext } from "react";
import "./Header.styles.scss";

import MetricInput from "../CalcItems/MetricInput/MetricInput";
import ImperialInput from "../CalcItems/ImperialInput/ImperialInput";
import UnitSelect from "../CalcItems/UnitSelect/UnitSelect";
import ResultContainer from "../CalcItems/ResultContainer/ResultContainer";
import HeaderIntro from "./headerIntro/HeaderIntro";

import { bmiContext } from "../../store/bmiContext";

const HeaderContainer = () => {

   const {bmi, setBmi, setMinIdealWeight,  setMaxIdealWeight } = useContext(bmiContext);
 
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
    let totalHeightInInches;


    if (selectedUnits === "metric") {
  
      bmi = parseFloat(metricMeasurements.weight / (metricMeasurements.height / 100) ** 2);
    } else if (selectedUnits === "imperial") {
      totalHeightInInches =
        (parseFloat(imperialMeasurements.height.feet) || 0) * 12 +
        (parseFloat(imperialMeasurements.height.inches) || 0);

      const totalWeightInPounds =
        (parseFloat(imperialMeasurements.weight.stone) || 0) * 14 +
        (parseFloat(imperialMeasurements.weight.pounds) || 0);

      if (totalHeightInInches > 0 && totalWeightInPounds > 0) {
      
        bmi = parseFloat((totalWeightInPounds / (totalHeightInInches ** 2)) * 703);
      }
    }

    setBmi(parseFloat(bmi.toFixed(1)));

    let minIdealWeight;
    let maxIdealWeight;
    if (selectedUnits === "metric") {
      minIdealWeight = parseFloat((18.5 * (metricMeasurements.height / 100) ** 2).toFixed(1));
      maxIdealWeight = parseFloat((24.9 * (metricMeasurements.height / 100) ** 2).toFixed(1));
    } else if (selectedUnits === "imperial") {
      
    const totalHeightInCm = totalHeightInInches * 2.54;


    minIdealWeight = ((parseFloat((18.5 * ((totalHeightInCm / 100) ** 2)).toFixed(1))) * 2.2046).toFixed(1);
    maxIdealWeight = ((parseFloat((24.9 * ((totalHeightInCm / 100) ** 2)).toFixed(1))) * 2.2046).toFixed(1);
    
    }

    setMinIdealWeight(minIdealWeight);
    setMaxIdealWeight(maxIdealWeight);
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
    setMaxIdealWeight(0);
    setMinIdealWeight(0);
    
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

          <ResultContainer selectedUnits={selectedUnits} />
        </article>
      </div>
    </div>
  );
};

export default HeaderContainer;
