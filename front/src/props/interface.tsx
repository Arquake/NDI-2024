export interface WeatherData {
    temperature: number;
    condition: string;
    windSpeed: number;
    windDirection: string;
    humidity: number;
}

export interface GetMeteoApiCardProps {
    city: string;
}
