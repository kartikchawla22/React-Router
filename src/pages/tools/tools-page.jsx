import "./tools-page.css";
import Calculator from "../../components/calculator/calculator";
import Weather from "../../components/weather/weather";
const ToolsPage = (params) => {

    return (
        <div>
            <Calculator></Calculator>
            <Weather></Weather>
        </div>
    )
}

export default ToolsPage