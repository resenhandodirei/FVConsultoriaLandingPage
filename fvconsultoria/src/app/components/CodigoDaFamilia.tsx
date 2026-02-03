import React from 'react';

const leis = [
  {
    numero: 'I',
    titulo: 'Lealdade ao Plano',
    descricao: 'O contrato entre treinador e aluno é sagrado. O resultado nasce da disciplina inegociável.'
  },
  {
    numero: 'II',
    titulo: 'Estratégia Silenciosa',
    descricao: 'Treine pesado em silêncio. Deixe que o ronco do motor e o novo shape falem por você.'
  },
  {
    numero: 'III',
    titulo: 'Honra à Máquina',
    descricao: 'Seu corpo é seu maior patrimônio. Não aceite combustível de baixa qualidade ou manutenção relaxada.'
  }
];

const CodigoDaFamilia: React.FC = () => {
  return (
    <section className="py-32 bg-black px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho de impacto mas limpo */}
        <div className="text-center mb-24">
          <h2 className="text-white text-4xl font-light tracking-widest uppercase mb-4">
            O <span className="font-black italic">Código</span>
          </h2>
          <p className="text-gray-600 text-[10px] font-bold tracking-[0.5em] uppercase">
            Inexistência de Atalhos // Preservação de Resultados
          </p>
        </div>

        {/* Lista de Leis */}
        <div className="space-y-20">
          {leis.map((lei, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start group">
              
              {/* Numeração Romana - Estilo Clássico */}
              <span className="text-brand-orange font-black text-2xl italic opacity-50 group-hover:opacity-100 transition-opacity">
                {lei.numero}.
              </span>

              {/* Conteúdo da Lei */}
              <div className="flex-1">
                <h3 className="text-white text-2xl font-bold mb-4 tracking-tight uppercase">
                  {lei.titulo}
                </h3>
                <div className="h-[1px] w-12 bg-brand-green mb-6 group-hover:w-full transition-all duration-700" />
                <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-2xl">
                  {lei.descricao}
                </p>
              </div>
              
            </div>
          ))}
        </div>

        {/* Finalização com Selo de Autoridade */}
        <div className="mt-32 flex justify-center">
          <div className="border border-white/10 px-8 py-4 text-center">
            <p className="text-white text-[10px] font-black tracking-[0.6em] uppercase">
              Sem Perguntas. Apenas Execução.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CodigoDaFamilia;