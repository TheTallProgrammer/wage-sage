import React, {useState} from "react"
import CalculateButton from "./CalculateButton.js";
import '../styles/SalaryCalculator.css'

const SalaryCalculator = () => {

    const [salary, setSalary] = useState("");




    return ( 
        <div className="sal-calc-container">
            <input
                type="text"
                value={salary}
                placeholder="Insert Salary"
            />
            <div className="button-container">
                <CalculateButton/>
            </div>
            

        </div>
     );
}
 
export default SalaryCalculator;