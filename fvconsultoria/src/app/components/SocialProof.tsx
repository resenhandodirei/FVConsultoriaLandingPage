import React from 'react';

const depoimentos = [
  {
    nome: 'MARCOS ALMEIDA',
    status: 'MÁQUINA AJUSTADA',
    resultado: '+6KG MASSA MAGRA',
    texto: 'O plano foi executado sem falhas. A estratégia do Fernando Victor mudou não só meu físico, mas minha mentalidade de performance.',
    foto: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&h=250&auto=format&fit=crop'
  },
  {
    nome: 'RICARDO SANTOS',
    status: 'ALTA PERFORMANCE',
    resultado: '-12KG GORDURA',
    texto: 'Precisão técnica. Não houve adivinhação, apenas telemetria e ajuste constante. O resultado veio antes do esperado.',
    foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=250&auto=format&fit=crop'
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-32 bg-background px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título da Seção */}
        <div className="mb-20">
          <span className="text-brand-orange text-[10px] font-black tracking-[0.4em] uppercase">Relatórios de Campo</span>
          <h2 className="text-white text-4xl font-light tracking-tight mt-2 uppercase">
            Resultados <span className="font-black italic text-brand-green">Confirmados</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {depoimentos.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-surface/30 p-8 border border-white/5 hover:border-brand-green/30 transition-all duration-500">
              
              {/* Foto com Filtro de Máfia */}
              <div className="relative w-40 h-52 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={item.foto} 
                  alt={item.nome} 
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="absolute inset-0 border-[10px] border-surface/50 pointer-events-none" />
              </div>

              {/* Dados do Relatório */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-black text-xl tracking-tighter">{item.nome}</h3>
                    <p className="text-brand-green text-[10px] font-bold tracking-widest">{item.status}</p>
                  </div>
                  <span className="text-white/20 font-mono text-xs">#{index + 1}</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 italic italic">
                  "{item.texto}"
                </p>

                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Métrica Final:</span>
                  <span className="text-brand-orange font-black text-sm">{item.resultado}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call to Action Sutil */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-[10px] font-bold tracking-[0.3em] uppercase">
            Junte-se à família. Seja o próximo relatório de sucesso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;