import { useState } from 'react';
import { TextInput } from "./ui/TextInput"; // Adjust the import path as necessary
import { DrinkList } from "./DrinkList"; // Adjust the import path as necessary
import { availableDrinks } from '../utils/data'; // Adjust the import path as necessary
import { Center, Square, Circle } from '@chakra-ui/react'

export const DrinkSearch = ({clickFn}) => {
    const [searchField, setSearchField] = useState(''); // Initialize with an empty string

    // Handle change event for the input field
    const handleChange = (event) => {//by default all eventhandlers or event objects will pass to the function'parameter the value of its user
        // in this case <input>'s value which is whatever the user types and save it as the word "event" which is just a placeholder
        // the same word will be use next to get its value:event.target.value
        setSearchField(event.target.value);// Update searchField state with the input value
    };

    // Filter the drinks based on the search input
    const matchedDrinks = availableDrinks.filter((drink) => {
        return drink.name.toLowerCase().startsWith(searchField.toLowerCase());//hre I had include before but it was wrong. The method
        //startsWith ensure that only select the drinks starting with letter type by the user
    });

    return (
        <><center>
            <label>Search for drinks:</label>
            <TextInput changeFn={handleChange} w={200} mb={8} />{/*/ the w={200} mb={8} are not doing anything???*/}
            <DrinkList clickFn={clickFn} drinks={matchedDrinks} />  {/* this was missing here: clickFn={clickFn} */}
        </center> 
        </>
    );      
};