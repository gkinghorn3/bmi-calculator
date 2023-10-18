import "./Header.styles.scss";

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <div className="header-text-content">
        <h1> Body Mass Index Calculator</h1>
        <p className='header-para'>
          
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
    </div>
  );
};

export default HeaderContainer;
