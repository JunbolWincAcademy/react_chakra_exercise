// import './Button.css';
import { Center, Square, Circle } from '@chakra-ui/react'

//Inside the DrinkButtons.jsx file, pass the drinkOne and drinkTwo props as parameters using the object destructuring syntax.
export const Button = ({text}) => {
   return 
   <Center bg='tomato' h='100px' color='white' cursor: pointer
   >
 {text}
</Center>
  //  <button className="button">{text}</button>;
};
