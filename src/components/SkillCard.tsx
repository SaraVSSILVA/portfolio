interface SkillCardProps {
  name: string;
  icon?: string; // Opcional, caso você queira usar ícones (ex: de Font Awesome ou devicons)
}

export const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 transition-transform transform hover:scale-105 hover:shadow-lg">
      {icon && (
        // Aqui você pode integrar uma biblioteca de ícones ou usar imagens SVG
        <img src={icon} alt={`${name} icon`} className="w-6 h-6" /> 
      )}
      <span className="font-body text-lg font-semibold text-techsea-secondary">
        {name}
      </span>
    </div>
  );
};