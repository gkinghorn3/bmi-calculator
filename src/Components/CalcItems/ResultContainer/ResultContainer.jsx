

export default function ResultContainer() {

    return (
        <div
        id="result-container"
        className="bg-gradient-to-l from-blue-500 to-indigo-600
            text-white p-5 flex flex-col md:flex-row md:justify-center items-center rounded-lg"
      >
        <div className="flex flex-col w-full md:w-[40%]">
          <p>Your BMI is...</p>
          <h3 className="font-bold text-[4rem] text-left">45</h3>
        </div>
        <div className="md:w-[40%]">
          <p className="text-sm">
            Your BMI suggests you're <span>A HEALTHY WEIGHT</span>. Your ideal weight is between <span>62.KG</span> and <span>80KG</span>.
          </p>
        </div>
      </div>
    )
}


