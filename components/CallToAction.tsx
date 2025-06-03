// src/components/CallToAction.js
import React from 'react';
import { HiPhone } from 'react-icons/hi';

const CallToAction = () => {
  return (
    <section className="cta-section relative text-white py-[90px] px-5">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/locksmithvideo.mp4" type="video/mp4" />
        {/* Agrega más fuentes si necesitas más compatibilidad */}
        <source src="/videos/locksmithvideo.webm" type="video/webm" />
        <source src="/videos/locksmithvideo.ogv" type="video/ogg" />
      </video>

      {/* Capa negra semitransparente */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-75 z-1"></div>

      {/* Contenido de la sección */}
      <div className="cta-content relative z-10 max-w-[850px] mx-auto text-center">
        <h2 className="text-3xl mb-5">Besoin d'aide en urgence pour ouvrir votre porte ?</h2>
        <p className="text-md mb-10">Nos experts serruriers sont disponibles 24/7 pour vous assister. Que ce soit pour une porte bloquée ou un remplacement de serrure, nous sommes là pour vous aider rapidement.</p>
        <button className="cta-button flex items-center justify-center px-8 py-4 text-sm bg-white text-black border-none rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-primary mx-auto">
          <HiPhone className="mr-2" />
          Contactez-nous maintenant
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
