export default function Footer(){
    const members = [
        {
            nom: 'Perez',
            prenom: 'Benjamin',

        },
        {
            nom: 'Nicolas',
            prenom: 'Vera'
        },
        {
            nom: 'Matteo',
            prenom: 'Paillusson'
        },
        {
            nom: 'Miri',
            prenom: 'Seyed Amineddin'
        }
        ]

    return (
        <footer className='bg-blue-700 text-white flex md:flex-row flex-col md:pt-0 pt-2 justify-center items-center mt-2'>
            <p className="underline">Projet réalisé par :</p>
            <div className='flex md:flex-row flex-col gap-4 justify-between'>
                {members.map((member, index) => (
                    <p key={index} className="m-2">{member.prenom} {member.nom}</p>
                ))}
            </div>
        </footer>
    )


}