import React, {useState} from "react"
import CalculateButton from "./CalculateButton.js";
import '../styles/SalaryCalculator.css'

const SalaryCalculator = () => {

    const [salary, setSalary] = useState("");
    const [result, setResult] = useState(0);

    const handleInputChange = (event) => {
        setSalary(event.target.value);
    }

    const handleCalculations = () => {
        var tempSal = parseFloat(salary).toFixed(2);
        var conversion = 0;

        if(isNaN(tempSal)) setResult("Invalid Input")
        else {
            //single status
            if(tempSal < 11926) conversion = .9;
            else if(tempSal < 48476) conversion = 0.88;
            else if(tempSal < 103351) conversion = 0.78;
            else if(tempSal < 197301) conversion = 0.76;
            else if(tempSal < 250525) conversion = 0.68;
            else if(tempSal < 609351) conversion = 0.65;
            else conversion = 0.63;
            setResult(tempSal * conversion);
        }
        
    }


    return ( 
        <div className="sal-calc-container">
            <input
                type="text"
                value={salary}
                placeholder="Insert Salary"
                onChange={handleInputChange}
            />
            <div className="button-container">
                <CalculateButton onProcess={handleCalculations}/>
            </div>
            <h2>My real depressing salary is: ${result}</h2>

        </div>
     );
}
 
export default SalaryCalculator;