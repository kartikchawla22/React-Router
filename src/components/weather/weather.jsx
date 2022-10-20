import { useEffect, useState } from "react";
import { Slider } from "@mui/material";
import './weather.css';
import Loader from "../loader/loader";
import axios from 'axios'

const Weather = (params) => {
    const [weatherData, setWeatherData] = useState()
    const [marks, setMarks] = useState([])
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true)
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getWeatherData, () => { }, {
                    enableHighAccuracy: false,
                    timeout: 5000,
                    maximumAge: Infinity
                });
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        const getWeatherData = async (position) => {
            const { latitude, longitude } = position.coords
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toFixed(2)}&lon=${longitude.toFixed(2)}&units=metric&appid=7827823101d2b73da072f3788992569f`)
            setWeatherData(data.data);
        }
        getLocation()
    }, [])

    useEffect(() => {
        if (weatherData) {
            console.log(weatherData);
            setMarks([
                {
                    value: weatherData.main.temp_min,
                    label: `${weatherData.main.temp_min}°C`,
                },
                {
                    value: weatherData.main.temp,
                    label: `${weatherData.main.temp}°C`,
                },
                {
                    value: weatherData.main.temp_max,
                    label: `${weatherData.main.temp_max}°C`,
                },
            ]
            )
            setIsloading(false)
        }

    }, [weatherData])

    const valuetext = (value) => {
        return `${value}°C`;
    }
    return (isLoading ? <div className="weather-container"><Loader></Loader></div> :
        (weatherData && marks.length > 0 &&
            <div className="weather-container">
                <div className="weather-content" >
                    <div className="weather-info">
                        <div className="weather-data">
                            <span>Weather:<span className="value"> {weatherData?.weather[0].main}</span></span>
                            <span>Real Feel:<span className="value">{weatherData?.main?.feels_like}°C</span></span>
                            <span>Humidity:<span className="value">{weatherData?.main?.humidity}</span></span>
                            <span>Preassure:<span className="value">{weatherData?.main.pressure}</span></span>
                        </div>
                        <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} alt="weahter" />
                    </div>
                    <Slider
                        key={"temp-slider"}
                        aria-label="Custom marks"
                        defaultValue={weatherData.main.temp}
                        getAriaValueText={valuetext}
                        step={10}
                        valueLabelDisplay="auto"
                        marks={marks}
                        min={weatherData.main.temp_min}
                        max={weatherData.main.temp_max}
                        disabled
                        color="primary"
                        className="weather-slider"
                    />
                </div>
            </div>
        )
    )
}

export default Weather