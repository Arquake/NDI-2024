import {quizzProps} from "../props/interface";
import React, {useState} from "react";
import ConfettiExplosion from 'react-confetti-explosion';


export default function QuizzComponent(){
    const quizz: quizzProps[] = [
        {
            organe: "Coeur",
            subject: "Courants marins",
            question: "Quel système océanique, comme le cœur humain, circule l’eau et la chaleur autour de la planète ?",
            reponses: [
                {
                    reponse: "La circulation thermohaline (ou les courants marins).",
                    correct: true,
                    isClicked: false
                },
                {
                    reponse: "Le Gulf Stream.",
                    correct: false,
                    isClicked: false
                },
                {
                    reponse: "La dérive des continents.",
                    correct: false,
                    isClicked: false
                },
                {
                    reponse: "Les marées.",
                    correct: false,
                    isClicked: false
                }
            ]
        },
        {
            organe: "Poumons",
            subject: "Échange gazeux",
            question: "Quels petits organismes marins, comme les poumons chez l’humain, produisent la majorité de l’oxygène que nous respirons ?",
            reponses: [
                {
                    reponse: "Le phytoplancton.",
                    correct: true,
                    isClicked: false
                },
                {
                    reponse: "Les baleines.",
                    correct: false,
                    isClicked: false
                },
                {
                    reponse: "Les coraux.",
                    correct: false,
                    isClicked: false
                },
                {
                    reponse: "Les méduses.",
                    correct: false,
                    isClicked: false
                }
            ]
        },
        {
            organe: "Peau",
            subject: "Surface de l’océan",
            question: "Question: Quelle partie de l’océan, comme la peau humaine, aide à réguler la température de la Terre ?",
            reponses: [
                {
                    reponse: "La surface de l’océan.",
                    correct: true,
                    isClicked: false
                },
                {
                    reponse: "Les abysses.",
                    correct: false,
                    isClicked: false
                },
                {
                    reponse: "Les récifs coralliens.",
                    correct: false,
                    isClicked: false
                },
                {
                    reponse: "Les icebergs.",
                    correct: false,
                    isClicked: false
                }
            ]
        },
        {
            organe: "Sang",
            subject: "Transport de nutriments",
            question: "Quel processus océanique, comme le sang chez l’humain, transporte des nutriments pour soutenir la vie marine ?",
            reponses: [
                {
                    reponse: "Le phénomène d’upwelling (remontée des eaux profondes).",
                    correct: true,
                    isClicked: false
                },
                {
                    reponse: "La photosynthèse.",
                    correct: false,
                    isClicked: false
                },
                {
                    reponse: "La respiration.",
                    correct: false,
                    isClicked: false
                },
                {
                    reponse: "Le cycle de l’eau.",
                    correct: false,
                    isClicked: false
                }
            ]
        },
        {
            organe: "os",
            subject: "Récifs coralliens",
            question: "Quelles structures océaniques, comme les os dans le corps humain, fournissent un support et un abri à la vie marine ?",
            reponses: [
                {
                    reponse: "Les récifs coralliens.",
                    correct: true,
                    isClicked: false
                },
                {
                    reponse: "Les icebergs.",
                    correct: false,
                    isClicked: false
                },
                {
                    reponse: "Les abysses.",
                    correct: false,
                    isClicked: false
                },
                {
                    reponse: "Les marées.",
                    correct: false,
                    isClicked: false
                }
            ]
        }
    ];
    const [score, setScore] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>(
        quizz.reduce((acc, _, idx) => ({ ...acc, [idx]: null }), {})
    );
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isExploding, setIsExploding] = React.useState(false);


    const handleAnswerClick = (questionIndex: number, answerIndex: number) => {
        setSelectedAnswers((prevState) => ({
            ...prevState,
            [questionIndex]: answerIndex
        }));
    };

    const handleSubmit = () => {
        const results = quizz.map((q, questionIndex) => {
            const selectedIndex = selectedAnswers[questionIndex];
            const isCorrect =
                selectedIndex !== null && q.reponses[selectedIndex]?.correct;
            return { question: q.question, isCorrect };
        });

        setScore(results.filter((r) => r.isCorrect).length);
        setIsSubmitted(true);
        setIsExploding(true);


    };



    return (
        <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100">
            {isSubmitted ? (
                <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl font-bold mb-4">Résultat</h2>
                    <p className="text-xl">
                        Votre score est de <span className="font-bold">{score}</span> /{" "}
                        <span className="font-bold">{quizz.length}</span>
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Recommencer
                    </button>
                    {isExploding && <ConfettiExplosion />}

                </div>

                ) : (
                <>
                    <h1 className="text-center text-3xl font-bold mt-10 container">Quizz</h1>
                    {quizz.map((quiz, questionIndex) => (
                        <div
                            key={questionIndex}
                            className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
                        >
                            <h2 className="text-xl font-bold text-center">
                                {quiz.organe} - {quiz.subject}
                            </h2>
                            <p className="text-gray-700 text-center mt-4">{quiz.question}</p>
                            <div className="mt-4">
                                {quiz.reponses.map((reponse, answerIndex) => (
                                    <p key={answerIndex} className="text-gray-700">
                                        <input
                                            type="radio"
                                            id={`${questionIndex}-${answerIndex}`}
                                            name={`question-${questionIndex}`}
                                            value={answerIndex}
                                            checked={selectedAnswers[questionIndex] === answerIndex}
                                            onChange={() =>
                                                handleAnswerClick(questionIndex, answerIndex)
                                            }
                                        />
                                        <label
                                            htmlFor={`${questionIndex}-${answerIndex}`}
                                            className="ml-2"
                                        >
                                            {reponse.reponse}
                                        </label>
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="mx-auto w-max">
                        <button
                            onClick={handleSubmit}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                        >
                            Submit
                        </button>
                    </div>
                </>
            )}
        </div>
    );


}