import { useEffect, useState } from 'react';
import {WeatherData} from '../props/interface';
import {getMeteoByCity} from '../API/meteo/useMeteoApi';
import {GetMeteoApiCardProps} from '../props/interface';

export function GetMeteoApiCard({ city }: GetMeteoApiCardProps) {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getMeteoByCity(city)
            .then(data => {
                if (data) {
                    setWeatherData({
                        temperature: data.current.temp_c,
                        condition: data.current.condition.text,
                        windSpeed: data.current.wind_kph,
                        windDirection: data.current.wind_dir,
                        humidity: data.current.humidity
                    });
                }
            })
            .catch(err => {
                setError(err.message);
            });
    }, [city]);

    return (    
        <div className="max-w-sm mt-10 ml-10 p-6 bg-transparent rounded-lg">
            <h2 className="text-xl font-bold">Météo à {city}</h2>
            {error ? (
                <p className="text-red-500 text-center">{error}</p>
            ) : weatherData ? (
                <div className="mt-4">
                    <p className="text-gray-700">🌡️ <strong>{weatherData.temperature}°C</strong></p>
                    <p className="text-gray-700">🌤️ <strong>{weatherData.condition}</strong></p>
                    <p className="text-gray-700">💨 <strong>{weatherData.windSpeed} km/h</strong></p>
                    <p className="text-gray-700">💧 <strong>{weatherData.humidity}%</strong></p>
                </div>
            ) : (
                <p className="text-gray-500 text-center mt-4">Chargement des données...</p>
            )}
        </div>
    );
}
