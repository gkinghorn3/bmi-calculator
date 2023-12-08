import { useState } from "react";

const inputCss =
  "border border-black/50 rounded-md h-12 w-full text-gunmetal font-bold text-[1.5rem] px-4";

const inputInnerLabelCss =
  "absolute top-[50%] right-4 transform translate-y-[-50%] text-mainBlue font-bold text-2xl";

export default function ImperialInput() {



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

    const handleChange = (e, measurementType, unitType) => {
        setImperialMeasurements({...imperialMeasurements, [measurementType]: {
            ...imperialMeasurements[measurementType], 
            [unitType]: e.target.value
        }})
      }
    
    

  return (
    <div>
        <div id="imperial-height-container" className="flex gap-4">
        <div
        id="imperial-ft-container"
        className="relative flex flex-col w-[50%]"
      >
        <label className="text-bodyClr mb-2">Height</label>
        <div className="relative">
          <input
            type="number"
            className={inputCss}
            onChange={(e) => handleChange(e, "height", "feet")}
          />
          <h3 className={inputInnerLabelCss}>ft</h3>
        </div>
      </div>
      <div
        id="imperial-in-container"
        className="relative flex flex-col justify-end w-[50%]"
      >
   
        <div className="relative">
          <input
            type="number"
            className={inputCss}
            onChange={(e) => handleChange(e, "height", "inches")}
          />
          <h3 className={inputInnerLabelCss}>in</h3>
        </div>
      </div>
        </div>


        {/* WIEGHT INPUTS BELOW  */}

        <div id="imperial-weight-container" className="flex gap-4 mt-4">
        <div
        id="imperial-ft-container"
        className="relative flex flex-col w-[50%]"
      >
        <label className="text-bodyClr mb-2">Weight </label>
        <div className="relative">
          <input
            type="number"
            className={inputCss}
            onChange={(e) => handleChange(e, "weight", "stone")}
          />
          <h3 className={inputInnerLabelCss}>st</h3>
        </div>
      </div>
      <div
        id="imperial-in-container"
        className="relative flex flex-col justify-end w-[50%]"
      >
   
        <div className="relative">
          <input
            type="number"
            className={inputCss}
            onChange={(e) => handleChange(e, "weight", "pounds")}
          />
          <h3 className={inputInnerLabelCss}>lbs</h3>
        </div>
      </div>
        </div>
      
            
    </div>
  );
}
