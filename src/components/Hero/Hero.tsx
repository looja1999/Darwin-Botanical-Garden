import React from 'react'
import { infoDarwinBotanicalGarden } from '../../constants'
import { IonButton, IonIcon } from '@ionic/react'
import { arrowForwardOutline, arrowForwardSharp } from 'ionicons/icons'

const Hero = () => {
  return (
    <section className='md:h-[70%] bg-botanicalGarden bg-no-repeat bg-gray-800  bg-blend-overlay bg-center bg-cover'>
        <div className={`max-w-[1080px] mx-auto px-6 md:p-0 py-16 h-full flex flex-col justify-center items-start gap-4`}>
            <h1 className='text-white text-3xl md:text-5xl font-extrabold tracking-wide'>Welcome to Darwin Botanical Garden</h1>
            <p className='text-dimWhite text-sm md:text-lg text-justify'>{infoDarwinBotanicalGarden[0]}</p>
            <p className='text-dimWhite text-sm md:text-lg text-justify md:block hidden'>{infoDarwinBotanicalGarden[1]}</p>
            <IonButton>Learn more <IonIcon md={arrowForwardSharp} ios={arrowForwardOutline} className='ml-2'/></IonButton>
        </div>
    </section>
  )
}

export default Hero