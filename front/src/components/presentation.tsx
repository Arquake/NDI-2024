
import './pres.css'

export default function Presentation() {

    return (
        <>
            <div className='min-h-screen bg-title'>
                <div className='flex flex-col justify-center items-center py-8'>
                    <h1 className='text-4xl font-semibold text-blue-400 pb-4 text-center w-full'>
                        Nuit de l'Info
                    </h1>
                    <img src="/logo.png" className='md:px-0 px-8'/>
                    <div className='py-8 md:w-1/3 md:px-0 px-8 container'>
                        <p className='text-neutral-200'>
                        À propos de Race for Water
                        Créée en 2010 par Marco Simeoni, la Fondation Race for Water est une organisation pionnière dédiée à la préservation des océans et à la lutte contre les impacts de la pollution plastique. Avec ses Odyssées emblématiques à bord de navires révolutionnaires comme le futur MODX 70, un catamaran “zéro émission de CO₂”, la fondation explore des solutions concrètes pour protéger nos océans tout en sensibilisant le public à leur importance cruciale.
                        <br/><br/>
                        Notre mission : Apprendre, Partager, Agir
                        Les océans sont essentiels à la vie : ils produisent la majeure partie de notre oxygène, régulent le climat et abritent une biodiversité incroyable. Mais aujourd’hui, ils sont gravement menacés par la pollution, la surpêche et le changement climatique. La Fondation s’engage à agir à travers son programme “Learn, Share, Act”, en mettant l’accent sur la décarbonation du transport maritime et la préservation d’un océan sain et vivant.
                        <br/><br/>
                        Rejoignez-nous dans cette aventure éducative et interactive, découvrez les liens entre l’océan et notre propre corps, et engagez-vous pour un avenir plus durable, avec un océan en bonne santé au cœur de nos actions.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}