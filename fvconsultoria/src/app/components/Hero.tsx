import React from 'react';
import Image from 'next/image';
import ProfessionalImage from './../img/Professional.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-24">

      {/* Glows de fundo */}
      <div className="absolute top-1/4 -left-32 w-[480px] h-[480px] bg-brand-green/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[480px] h-[480px] bg-brand-orange/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Textura sutil */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.035] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* TEXTO */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase">
              Ajuste de Performance Disponível
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tighter">
            SEU CORPO,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-orange to-brand-orange">
              SUA MÁQUINA.
            </span>
          </h1>

          {/* Subtexto */}
          <p className="text-gray-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
            Aqui, saúde é tratada com a precisão de um motor V8 e a estratégia de quem joga para ganhar.
            <span className="text-white"> Resultados mensuráveis.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-brand-orange hover:bg-orange-500 text-white px-8 py-4 rounded-sm font-black text-sm transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.35)] uppercase italic">
              Assumir o Volante
            </button>

            <button className="border border-white/15 hover:border-brand-green/50 text-white px-8 py-4 rounded-sm font-black text-sm transition-all bg-white/5 backdrop-blur-sm uppercase">
              Ver a Garagem
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10 border-t border-white/5 pt-6 max-w-md">
            <div>
              <p className="text-brand-green font-black text-2xl tracking-tighter">+500</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Alunos</p>
            </div>
            <div>
              <p className="text-brand-green font-black text-2xl tracking-tighter">100%</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Estratégia</p>
            </div>
            <div>
              <p className="text-brand-green font-black text-2xl tracking-tighter">0→100</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Evolução</p>
            </div>
          </div>
        </div>

        {/* VISUAL */}
        <div className="relative flex justify-center items-center">

          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/20 to-transparent blur-[90px] rounded-full" />

          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-tr-[96px] rounded-bl-[96px] border border-white/15">

            {/* Placeholder imagem */}
            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
              <Image src={ProfessionalImage} alt="Fernando Victor" className="w-full h-full object-cover" fill />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Badge nome */}
            <div className="absolute bottom-6 left-12 bg-black/80 backdrop-blur-md border border-brand-orange px-4 py-3">
              <p className="text-brand-orange font-bold text-[10px] uppercase tracking-widest">
                Estrategista Chefe
              </p>
              <p className="text-white font-black text-lg leading-none">
                FERNANDO VICTOR
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
        <div className="w-px h-10 bg-gradient-to-b from-brand-green to-transparent" />
        <span className="text-[9px] text-gray-600 font-bold tracking-[0.4em] uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;
