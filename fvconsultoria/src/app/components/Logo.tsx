import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className, size = 60 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradiente sem preto para não sumir no fundo */}
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" /> {/* Verde Vibrante */}
          <stop offset="100%" stopColor="#F97316" /> {/* Laranja Fogo */}
        </linearGradient>

        {/* Filtro de brilho para destacar do fundo preto */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Escudo com brilho externo */}
      <path
        d="M20 30 L80 30 L75 70 C75 85 50 95 50 95 C50 95 25 85 25 70 Z"
        stroke="url(#brandGradient)"
        strokeWidth="3"
        filter="url(#glow)"
        className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
      />

      {/* Iniciais FV - Agora com preenchimento sólido de destaque */}
      <text
        x="50%"
        y="62"
        textAnchor="middle"
        fill="url(#brandGradient)"
        fontSize="26"
        fontWeight="900"
        fontFamily="sans-serif"
        filter="url(#glow)"
      >
        FV
      </text>

      {/* Chapéu com cor sólida para contraste */}
      <path 
        d="M35 22 L65 22 M42 22 L44 14 H56 L58 22" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;