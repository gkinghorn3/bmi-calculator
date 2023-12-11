
import logo from "/assets/images/logo.svg";
export default function HeaderIntro() {

    return <div className="mx-auto  w-[80%] lg:mx-12 lg:w-[25rem] text-center lg:text-left ">
    <img src={logo} alt="logo" className=" mx-auto lg:mx-0 w-12" />
    <h1 className="font-bold text-[3rem] mt-4 lg:mt-16 mb-4">
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
}