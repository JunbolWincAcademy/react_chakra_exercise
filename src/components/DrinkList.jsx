import { availableDrinks } from '../utils/data';
import { DrinkItem } from './DrinkItem';

export const DrinkList = ({clickFn}) => {
  const drinkItems = availableDrinks.map((item, index) => (
    <li key={index}>
      <DrinkItem drink={item} clickFn={clickFn}/>
    </li>
  ));
  return <ul style={{ listStyle: 'none' }}>{drinkItems}</ul>;
};

//------EXPLANATION OF WHAT IS HAPPENING HERE and specially why "key" is in <li>
/* The first thing is to know that <li key={index}/> here we are giving <li> 
a the prop key={index}. Ard that is how you add props to HTML elements in React
The second thing is when you are going to show different <li> elements those will
treated as siblings by React and React have this rule that each sibling needs 
to have each a personal or unique identification called key to avoid confusion on
the updates and is why you need to pass it as prop and you select the index of the
array as a key identifier 
The third thing is that <DrinkItem drink={item} is a child component of <li> where
drink={item} is the declaration of it prop

and finally <ul>{drinkItems}</ul> is collection all those <li> in a single list 

to get rid of the bullets I used: style={{ listStyle: 'none' }} the outer {} on
the expression { listStyle: 'none' } the convention in JSX to be able to use Javascript
expressions and JSX doesn't accept normal expression like:  style="list-style: none;"
to add CSS style to <ul> you need to pass an object to style where the property name 
is in camelCase (which is the JavaScript convention, since hyphens are not valid in variable names),
 and the property value is a string 'none'. 
*/
