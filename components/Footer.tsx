import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Pequenas conversas... <span className="text-purple">Grandes Ideias</span>
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Estou totalmente aberto a perguntas ou feedbacks! basta pressionar o botão abaixo...
                </p>
                <a href="mailto:guilherme.pmartins04@gmail.com">
                    <MagicButton
                        title="Contate-me!"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2025 Guilherme Martins
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a key={info.id} href={info.link} target='_Blank'>
                            <div

                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <img src={info.img} alt="icons" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer >
    )
}

export default Footer