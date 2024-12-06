
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
export interface reponsesQuiz {
    reponse: string;
    correct: boolean;
    isClicked: boolean;
}

export interface quizzProps {
    organe: string;
    subject: string;
    question: string;
    reponses: reponsesQuiz[];
}
