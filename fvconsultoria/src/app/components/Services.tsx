import React from 'react';

interface ServiceCard {
  id: string;
  category: string;
  title: string;
  description: string;
  color: 'green' | 'orange' | 'white';
}

const services: ServiceCard[] = [
  {
    id: '01',
    category: 'MECÂNICA',
    title: 'Ajuste de Motor',
    description: 'Periodização de treino de força e hipertrofia. Transformamos seu chassi básico em uma máquina de alto desempenho.',
    color: 'green',
  },
  {
    id: '02',
    category: 'ADITIVOS',
    title: 'Combustível Premium',
    description: 'Protocolos alimentares estratégicos. O que você ingere determina a potência que sua máquina entrega na pista.',
    color: 'orange',
  },
  {
    id: '03',
    category: 'TELEMETRIA',
    title: 'Revisão Completa',
    description: 'Consultoria online 1-on-1 com análise de progresso constante. Onde cada detalhe do seu corpo é monitorado.',
    color: 'white',
  },
];

const Services: React.FC = () => {
  return (
    <section id="garagem" className="py-24 bg-background relative overflow-hidden">
      {/* Detalhe de fundo técnico (Linhas de grade) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-16">
          <h2 className="text-white font-black text-4xl md:text-5xl tracking-tighter uppercase mb-4">
            A <span className="text-brand-green">GARAGEM</span>
          </h2>
          <div className="w-20 h-1 bg-brand-orange" />
          <p className="mt-6 text-gray-500 font-medium max-w-md uppercase text-xs tracking-[0.3em]">
            Serviços especializados em modificação corporal e performance humana.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative p-10 border-white/10 md:border-r last:border-r-0 border-b md:border-b-0 hover:bg-white/[0.02] transition-all duration-500 overflow-hidden"
            >
              {/* Número de fundo decorativo */}
              <span className="absolute -top-4 -right-4 text-8xl font-black text-white/[0.03] italic group-hover:text-white/[0.05] transition-colors">
                {service.id}
              </span>

              {/* Tag de Categoria */}
              <p className={`text-[10px] font-black tracking-[0.3em] mb-8 ${
                service.color === 'green' ? 'text-brand-green' : 
                service.color === 'orange' ? 'text-brand-orange' : 'text-white'
              }`}>
                // {service.category}
              </p>

              <h3 className="text-white font-bold text-2xl mb-4 uppercase tracking-tight">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-12 min-h-[80px]">
                {service.description}
              </p>

              {/* Botão de Ação do Card */}
              <button className="flex items-center gap-3 group/btn">
                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-brand-orange transition-all`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-white tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                  Solicitar Ajuste
                </span>
              </button>

              {/* Barra de destaque inferior que aparece no hover */}
              <div className={`absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                service.color === 'green' ? 'bg-brand-green' : 
                service.color === 'orange' ? 'bg-brand-orange' : 'bg-white'
              }`} />
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default Services;