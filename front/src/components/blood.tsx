import { GetMeteoApiCard } from "./getMeteoApi";


export default function Blood() {
    return (
        <>
            <div className="absolute">
            <GetMeteoApiCard city={'Orléans'} />
            </div>
            
            <div className='h-screen bg-purple-500 grid grid-cols-2 py-8 px-8 items-center justify-center'>
                
                <div className="justify-self-end">
                    <h1 className='text-4xl font-semibold text-blue-700 pb-1 w-full'>
                        Le sang
                    </h1>
                    <h2 className='text-xl font-normal text-neutral-500  w-full'>
                        desc sang
                    </h2>
                </div>
                    
            </div>
        </>
    )
}