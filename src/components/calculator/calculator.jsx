import "./calculator.css";
import { Button } from "@mui/material";
import { useState } from "react";

const nums = [['C', 'CE', '*', '/'], [7, 8, 9, '-'], [4, 5, 6, '+'], [1, 2, 3, '='], [0, '.']];
const Calculator = (params) => {

    const [acc, setAcc] = useState('')
    const [result, setResult] = useState('')

    function clearDisplay() {
        setResult('')
        setAcc('')
    }
    function handleNumber(num) {
        if (result.length <= 8) {
            setResult(result + num)
        }
    }
    function handleOperation(sinal) {
        if (result == '') {
            return
        }
        else if (result.split('')[result.length - 1] == '.') {
            setAcc(acc + result + '0' + ` ${sinal} `)
            setResult('')
        }
        else {
            setAcc(acc + result + ` ${sinal} `)
            setResult('')
        }
    }
    function handleDecimal() {
        if (result.length == 0) {
            setResult('0.')
        }
        else if (result.split('')[result.length - 1] == '.') {
            return
        }
        else {
            setResult(result + '.')
        }
    }
    function getResult() {
        var calculatedResult = String(acc + result).replace('÷', '/').replace('x', '*')
        calculatedResult = String(eval(calculatedResult)).substring(0, 9)
        setResult(calculatedResult)
        setAcc('')
    }
    const calculatorButtonClick = (button) => {
        if (typeof button == 'number') {
            handleNumber(button)
        } else {
            switch (button) {
                case 'C':
                    setResult('')
                    break;
                case 'CE':
                    clearDisplay()
                    break;
                case '.':
                    handleDecimal()
                    break;
                case '=':
                    getResult()
                    break;
                default:
                    handleOperation(button)
                    break;
            }
        }
    }
    const getButtonSpecificCSS = (button) => {
        if (button == '=') {
            return 'equal'
        }
        return `${button}`
    }
    return (
        <div className="calculator-container">
            <div className="calculator-content">
                <div className="calculator-display">
                    <div className="acc">{acc}</div>
                    <div className="total">{result}</div>
                </div>
                <div className="calculator-buttons-container" >
                    {nums.map((row, index) => (
                        <div key={`row-${index}`} className="d-flex">
                            {row.map((column, cIndex) => (
                                <Button
                                    variant="contained"
                                    className={`caclulator-button calculator-button-${getButtonSpecificCSS(column)}`}
                                    key={column}
                                    onClick={() => calculatorButtonClick(column)}>
                                    {column}
                                </Button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Calculator