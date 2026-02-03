import React from 'react';

// Aqui definimos os dados que vão aparecer
const resultados = [
  { rotulo: 'GANHO DE MASSA', valor: '+12kg', cor: 'bg-emerald-500' },
  { rotulo: 'QUEIMA DE GORDURA', valor: '-8kg', cor: 'bg-orange-500' },
  { rotulo: 'PERFORMANCE', valor: '100%', cor: 'bg-white' },
];

const PainelResultados: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Título simples e direto */}
        <h2 className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase mb-12 border-l-4 border-orange-500 pl-4">
          Telemetria de Resultados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {resultados.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              
              {/* O Número Grande (O que importa) */}
              <span className="text-6xl font-black tracking-tighter italic">
                {item.valor}
              </span>

              {/* A barra que parece um medidor de combustível */}
              <div className="w-full h-1 bg-gray-800">
                <div className={`h-full ${item.cor} w-3/4 shadow-[0_0_10px_rgba(255,255,255,0.2)]`} />
              </div>

              {/* O texto explicativo */}
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                {item.rotulo}
              </span>
              
            </div>
          ))}
        </div>

        {/* Uma frase de efeito no estilo "O Don" */}
        <p className="mt-16 text-gray-600 text-xs italic border-t border-white/5 pt-8 text-center">
          "Números não mentem, pessoas sim. Aqui o resultado é o único contrato."
        </p>
      </div>
    </section>
  );
};

export default PainelResultados;