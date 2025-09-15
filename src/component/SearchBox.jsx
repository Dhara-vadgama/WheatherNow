import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);


    // const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;



    let getWeatherInfo = async () => {
        try {
            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await responce.json();
            if (jsonResponce.cod !== 200) {
                setError(true);
                return null;
            }
            setError(false); // clear error on success

            console.log(jsonResponce);
            let result = {
                city: city,
                temp: jsonResponce.main.temp,
                tempMin: jsonResponce.main.temp_min,
                tempMax: jsonResponce.main.temp_max,
                humidity: jsonResponce.main.humidity,
                feelsLike: jsonResponce.main.feels_like,
                weather: jsonResponce.weather[0].description,
            }
            console.log(result);
            return result
        } catch (err) {
            console.error("Fetch error:", err);
            setError(true);
            return null;
        }
    }



    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        if (newInfo) {
      updateInfo(newInfo); // ✅ only update if valid
    }
    

    }
    return (
        <>
            <div className='SearchBox'>
                <form onSubmit={handleSubmit}>
                    <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                    <br></br>
                    <br></br>
                    <Button variant="contained" type="submit">
                        Search
                    </Button>
                </form>
            </div>
            {error && (
                <p style={{ color: "red", marginTop: "10px" }}>
                    ❌ No such place exists. Please try again.
                </p>)}
        </>
    )
}