import React from 'react'

export default function Presentation() {

    return (
        <>
            <div className='h-screen'>
                <div className='flex flex-col justify-center items-center py-8'>
                    <h1 className='text-4xl font-semibold text-blue-700 pb-1 text-center w-full'>
                        Nuit de l'Info
                    </h1>
                    <h2 className='text-xl font-normal text-neutral-500 text-center w-full'>
                        Race for water
                    </h2>

                    <div className='py-8 w-1/3 container'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit illum aliquid omnis itaque illo voluptatem, iure ducimus qui quae voluptatum quo cumque quam natus minima dolorem esse quas inventore molestias!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}