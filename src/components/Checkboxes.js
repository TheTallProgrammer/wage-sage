import React from 'react'
import '../styles/Checkboxes.css'

const Checkboxes = ({onCheck}) => {
    return ( 
        <div class="checkbox">
            <input type="checkbox" id="checkbox" onClick={onCheck}/>
            <label for="checkbox"></label>
        </div>
     );
}

export default Checkboxes;