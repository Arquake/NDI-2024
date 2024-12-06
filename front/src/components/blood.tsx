import { GetMeteoApiCard } from "./getMeteoApi";


export default function Blood() {
    return (
        <>
            <GetMeteoApiCard city={'Orléans'} />
            <div className='h-screen'>
                
                <div className='grid grid-cols-2 py-8'>
                    <div>
                        
                        <h1 className='text-4xl font-semibold text-blue-700 pb-1 text-center w-full'>
                            Nuit de l'Info
                        </h1>
                        <h2 className='text-xl font-normal text-neutral-500 text-center w-full'>
                            Race for water
                        </h2>
                    </div>
                    
                </div>
            </div>
        </>
    )
}