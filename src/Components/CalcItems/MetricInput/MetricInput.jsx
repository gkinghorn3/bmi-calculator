
import { useState } from "react";


const inputCss = "border border-black/50 rounded-md h-12 w-full text-gunmetal font-bold text-[1.5rem] px-4";

const inputInnerLabelCss = "absolute top-[50%] right-4 transform translate-y-[-50%] text-mainBlue font-bold text-2xl"



export default function Input({metricMeasurements, setMetricMeasurements}) {



  const handleChange = (e, inputType) => {
    setMetricMeasurements({...metricMeasurements, [inputType]: e.target.value})
  }



  return (
    <>
      <div className="flex gap-4">
        
        <div id="metric-height-container" className="relative flex flex-col w-[50%]">
        <label className="text-bodyClr mb-2">Height</label>
         <div className="relative">
         <input
            type="number"
            className={inputCss}
            onChange={(e) => handleChange(e, 'height')}
          />
          <h3 className={inputInnerLabelCss}>cm</h3>
         </div>

        </div>
        
        <div id='metric-weight-container' className="relative flex flex-col w-[50%]">
        <label className="text-bodyClr mb-2">Weight</label>
         <div className="relative">
         <input
            type="number"
            className={inputCss}
            onChange={(e) => handleChange(e, 'weight')}
          />
          <h3 className={inputInnerLabelCss}>kg</h3>
         </div>

        </div>
      
      </div>

    </>
  );
}
