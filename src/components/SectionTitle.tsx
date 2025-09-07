interface SectionsTitleProps {
  title: string;
}

export const SectionsTitle = ({ title }: SectionsTitleProps) => {
  return (
    <h1 className="font-heading text-4xl md:text-5xl text-techsea-secondary text-center mb-12">
      {title}
    </h1>
  );
};