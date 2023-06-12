import React, { useEffect, useState } from 'react'

const WeatherCard = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = useState("")
    const {
        temp,
        humidity,
        name,
        country,
        sunrise,
        sunset,
        weatherMood,
        speed,
    } = tempInfo;
    let sunS = sunset;
    let res = new Date(sunS * 1000);
    let sunSet = `${res.getHours()}:${res.getMinutes()}`;

    let sunR = sunrise;
    let result = new Date(sunR * 1000);
    let sunRise = `${result.getHours()}:${result.getMinutes()}`;

    useEffect(() => {
        if(weatherMood){
            switch (weatherMood) {
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;

                    case "Haze":
                    setWeatherState("wi-fog");
                    break;

                    case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
            
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
     }, [weatherMood])
    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <div>{temp}&deg;</div>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{weatherMood}</div>
                        <div className='place'>
                            {name}, {country}
                        </div>
                    </div>
                </div>

                <div className='date'>{new Date().toLocaleString()}</div>
                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-sunset'></i></p>
                            <div className='extra-info-leftside'>
                                Sunset <br /> {sunSet}
                            </div>
                        </div>

                        <div className='two-sided-section'>
                            <p><i className='wi wi-sunrise'></i></p>
                            <div className='extra-info-leftside'>
                                Sunrise <br />{sunRise}
                            </div>
                        </div>
                    </div>
                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-humidity'></i></p>
                            <div className='extra-info-leftside'>
                                Humidity <br /> {humidity}
                            </div>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-strong-wind'></i></p>
                            <div className='extra-info-leftside'>
                                Speed <br /> {speed}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard;
