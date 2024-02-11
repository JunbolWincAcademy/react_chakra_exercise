// import './DrinkButtons.css';
import { Button } from './ui/Button';
//Inside the DrinkButtons.jsx file, pass the drinkOne and drinkTwo props as parameters using the object destructuring syntax.
export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  return (
    <>
      <h2>Would you like tea or coffee?</h2>
      <div className="button-group">
        {/* <button className="button">{drinkOne}</button>
        <button className="button">{drinkTwo}</button> */}
        <Button text={drinkOne} />
        <Button text={drinkTwo} />
      </div>
    </>
  );
};

