// Code Keypad Component Here
import React from "react";



function Keypad (){
    function handleInput(e) {
        console.log("Entering password...")
    }

    return (
        <div>
            <input
            type='password'
            name='search'
            onChange={handleInput}
            />
        </div>
    )
}

export default Keypad;