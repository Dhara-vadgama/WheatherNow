import './WeatherApp.css';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';
import { useState } from 'react';
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
          city: "Delhi",
        feelsLike: 36.98,
        humidity: 52,
        temp: 33.05,
        tempMax: 33.05,
        tempMin: 33.05,
        weather: "haze"
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <>
        <div className="WeatherApp">  
            <h1>WeatherApp</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
        </>
    )
}