import { useState, useContext } from "react"

import { bmiContext } from "../../../store/bmiContext"


export default function ResultContainer({ selectedUnits}) {

  const { bmiNumber, minIdealWeight, maxIdealWeight } = useContext(bmiContext);

  const [bmiResult, setBmiResult] = useState({
    classification: "..."

  })

  // if (bmiNumber < 18.5) {
  //   setBmiResult({
  //     classification: "Underweight",
  //     idealWeight: {
  //       min: "...",
  //       max: "...",
  //     }
  //   })
  // } else if (bmiNumber >= 18.5 && bmiNumber < 25) {
  //   setBmiResult({
  //     classification: "Healthy Weight",
  //     idealWeight: {
  //       min: "...",
  //       max: "...",
  //     }
  //   })
  // } else if (bmiNumber >= 25 && bmiNumber < 30) {
  //   setBmiResult({
  //     classification: "Overweight",
  //     idealWeight: {
  //       min: "...",
  //       max: "...",
  //     }
  //   })
  // } else {
  //   setBmiResult({
  //     classification: "Obese",
  //     idealWeight: {
  //       min: "...",
  //       max: "...",
  //     }
  //   })
  // }

  return (
    <div
      id="result-container"
      className="bg-gradient-to-l from-blue-500 to-indigo-600
          text-white p-5 flex flex-col md:flex-row md:justify-center items-center rounded-lg"
    >
      <div className="flex flex-col w-full md:w-[40%] ">
        <p>Your BMI is...</p>
        <h3 className="font-bold text-[4rem] text-left">{isNaN(bmiNumber) || !isFinite(bmiNumber) ? "0" : bmiNumber}</h3>
      </div>
      <div className="md:w-[40%]">
        <p className="text-sm">
          Your BMI suggests you're <span>{bmiResult.classification}</span>. Your ideal weight is between <span className="font-bold">{minIdealWeight}{selectedUnits === 'metric' ? 'kg' : 'lbs'}</span> and <span className="font-bold">{maxIdealWeight}{selectedUnits === 'metric' ? 'kg' : 'lbs'}</span>.
        </p>
      </div>
    </div>
  )
}


