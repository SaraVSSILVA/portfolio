import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode; // Aceita um componente de ícone (ex: SVG, ícone de biblioteca)
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-center text-techsea-primary mb-4">
        {icon}
      </div>
      <h3 className="font-heading text-2xl text-techsea-secondary text-center mb-2">
        {title}
      </h3>
      <p className="font-body text-center text-techsea-secondary">
        {description}
      </p>
    </div>
  );
};