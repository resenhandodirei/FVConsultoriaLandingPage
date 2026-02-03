import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/5 py-3">
      <div className="max-w-8xl mx-auto px-6 flex justify-between items-center">
        
        {/* Lado Esquerdo */}
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Um círculo de luz sutil atrás da logo para dar profundidade */}
            <div className="absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full" />
            <Logo size={55} className="relative z-10" />
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-white font-black text-2xl tracking-tighter leading-none">
              FERNANDO <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-500">VICTOR</span>
            </h1>
            <p className="text-[10px] text-gray-500 font-bold tracking-[0.3em] uppercase">
              Seu corpo, sua máquina
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {['Garagem', 'A Estratégia', 'Planos'].map((item) => (
            <a key={item} href="#" className="text-gray-400 hover:text-white text-xs font-bold tracking-widest transition-all">
              {item.toUpperCase()}
            </a>
          ))}
          <button className="border-2 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white px-5 py-2 rounded-sm font-black text-xs transition-all italic">
            PILOTAR TRANSFORMAÇÃO
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;