// Code Keypad Component Here
import React from "react";

function Keypad (){
    function change(e){
            console.log('Entering password...')
    }
    return (
        <div>
            <input type='password' 
            onChange={change} placeholder='password...'>
            </input>
        </div>
    )
}

export default Keypad;