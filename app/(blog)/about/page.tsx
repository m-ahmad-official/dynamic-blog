import Navbar2 from '@/app/components/Navbar2'
import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <>
            <Navbar2 />
            <section className='bg-[#1f1f1f] flex flex-col gap-20 justify-center items-center'>
                <div className='flex flex-col items-center text-center gap-6 pt-28 max-sm:w-[330px]'>
                    <h1 className='sm:text-[42px] text-3xl text-white font-bold'>About Marvel Studios</h1>
                    <h3 className='sm:text-xl text-[17px] text-white italic'>The Rise of the Marvel Cinematic Universe (2008–Present)</h3>
                </div>
                <Image src={"/images/avengers-infinity-war.jpg"} alt='Avengers' width={1000} height={100} className='rounded-2xl shadow-[0_8px_20px_5px_rgba(0,0,0,0.4)] sm:block hidden' />
                <Image src={"/images/avengers-infinity-war.jpg"} alt='Avengers' width={330} height={100} className='rounded-2xl shadow-[0_8px_20px_5px_rgba(0,0,0,0.4)] max-sm:block hidden' />
                <div className='text-white flex flex-col items-center gap-11 sm:w-[1000px] w-[330px] pb-28 sm:text-[17px] text-base'>
                    <p>
                        Marvel Studios has revolutionized the film industry with the creation of the Marvel Cinematic Universe (MCU), a groundbreaking interconnected series of films and TV shows. It all began with <i className='text-[#ff0000]'>Iron Man (2008),</i> which introduced Robert Downey Jr. as Tony Stark and laid the foundation for the MCU. This was followed by a series of films that built toward <i className='text-[#ff0000]'>The Avengers (2012),</i> marking the first major crossover event in the franchise and establishing Marvel Studios as a dominant force in Hollywood.
                    </p>

                    <p>
                        Over the years, the MCU has expanded into multiple Phases, introducing iconic characters like Black Panther, Captain Marvel, Doctor Strange, and the Guardians of the Galaxy. The saga reached its zenith with <i className='text-[#ff0000]'>Avengers: Infinity War (2018)</i> and <i className='text-[#ff0000]'>Avengers: Endgame (2019),</i> which brought together dozens of characters in an epic showdown with Thanos. These films not only broke box office records but also redefined storytelling in franchise cinema, creating a shared universe that fans around the world eagerly follow.

                    </p>

                    <p>
                        Since 2021, Marvel Studios has ventured into streaming with Disney+ series like <i className='text-[#ff0000]'>WandaVision, Loki, and Moon Knight,</i> adding depth to its cinematic universe. With each project, the studio has continued to push boundaries, introducing more diverse characters and stories while exploring new genres and tones. As it moves into future phases, Marvel Studios remains a trailblazer in the superhero genre, captivating audiences with its unique blend of action, humor, and heart.
                    </p>
                </div>
            </section>
        </>
    )
}
