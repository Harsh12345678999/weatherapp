import React, { useState } from 'react';
import "./style.css"
import WeatherCard from './weatherCard';

const Weather = () => {
    const [inputValue, setInputValue] = useState("Kanpur");
    const [tempInfo, setTempInfo] = useState({})
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=66a2843de50d1b7c84c6df3725db63e5`;
            let res = await fetch(url);
            let data = await res.json()
           
            const { temp, humidity } = data.main;
            const { name } = data;
            const { country, sunrise, sunset } = data.sys;
            const { main: weatherMood } = data.weather[0];
            const { speed } = data.wind;

            const myNewWeatherInfo = {
                temp,
                humidity,
                name,
                country,
                sunrise,
                sunset,
                weatherMood,
                speed,
            };
            setTempInfo(myNewWeatherInfo);

        } catch (error) {

        }
    }
    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type="search" placeholder='Search...' autoFocus className='searchTerm' id='search'
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                    <button className='searchButton' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

        <WeatherCard tempInfo={tempInfo}/>
        </>
    )
}

export default Weather;
