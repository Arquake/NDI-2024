import { GetMeteoApiCard } from "./getMeteoApi";


export default function Blood() {
    return (
        <>
            <div className="absolute">
            <GetMeteoApiCard city={'Corfou'} />
            </div>
            
            <div className='h-screen heart grid grid-cols-2 gap-16 py-8 px-8 items-center justify-center'>
                <div className="justify-self-end bg-neutral-50 py-4 px-8 bg-opacity-80 shadow-xl rounded">
                    <h1 className='text-4xl font-semibold text-blue-700 pb-1 w-full'>
                        Le Coeur
                    </h1>
                    <h2 className='text-xl font-normal text-neutral-500  w-full'>
                        <audio controls>
                            <source src="p1.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </h2>
                </div>

                <div>
                    <img src="/Coeur.png"/>
                </div>
                    
            </div>
        </>
    )
}