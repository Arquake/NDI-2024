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
        <footer className='h-16 bg-blue-700 text-white flex justify-center items-center mt-2'>
            <p>Projet réalisé par :</p>
            <div className='flex justify-between'>
                {members.map((member, index) => (
                    <p key={index} className="m-2">{member.prenom} {member.nom}</p>
                ))}
            </div>
        </footer>
    )


}