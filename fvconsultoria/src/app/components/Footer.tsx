import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-darker border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Luz de fundo sutil para o logo brilhar no rodapé */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-brand-green/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Branding */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Logo size={45} />
              <span className="text-white font-black text-xl tracking-tighter">
                FV<span className="text-brand-orange">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed italic">
              "Uma proposta de treino que você não poderá recusar."
            </p>
            <div className="flex gap-4 mt-2">
              {/* Ícones sociais (Placeholders) */}
              <div className="w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center text-brand-green hover:border-brand-orange transition-colors cursor-pointer">IG</div>
              <div className="w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center text-brand-green hover:border-brand-orange transition-colors cursor-pointer">YT</div>
            </div>
          </div>

          {/* Coluna 2: Navegação (Garagem) */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xs tracking-[0.2em] uppercase">A Garagem</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-brand-green transition-colors">Metodologia V8</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Consultoria Online</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Treino Presencial</a></li>
            </ul>
          </div>

          {/* Coluna 3: Empresa (A Família) */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xs tracking-[0.2em] uppercase">A Família</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-brand-green transition-colors">Sobre o Don</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Resultados</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Coluna 4: CTA Final */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xs tracking-[0.2em] uppercase">Manutenção</h4>
            <p className="text-gray-500 text-sm mb-4">Pronto para ajustar seu motor?</p>
            <button className="w-full bg-surface border border-brand-orange/30 text-white py-3 rounded-sm font-black text-xs hover:bg-brand-orange transition-all duration-300">
              AGENDAR REVISÃO
            </button>
          </div>
        </div>

        {/* Linha Final de Copyright */}
        <div className="border-t border-white/1 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] font-bold tracking-[0.3em] uppercase">
            ©{currentYear} FERNANDO VICTOR PERFORMANCE. TODOS OS DIREITOS RESERVADOS. <span className="mx-2 text-white/20">|</span> 
                <span className="text-brand-orange hover:text-brand-green transition-colors duration-300">
                    @fvconsultoria
                </span>
          </p>
            <p className="text-gray-600 text-[10px] font-bold tracking-[0.3em] uppercase">
                Developed for <span className="text-white">Larissa Corrêa</span> 
                <span className="mx-2 text-white/20">|</span> 
                <span className="text-brand-orange hover:text-brand-green transition-colors duration-300">
                    @resenhandodirei
                </span>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;