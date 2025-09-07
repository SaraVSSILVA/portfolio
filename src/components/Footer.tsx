import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-techsea-secondary text-white py-8 md:py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between text-sm">
        {/* Direitos Autorais */}
        <p className="mb-4 md:mb-0 text-center md:text-left">
          © 2025 TechSea | Sara Silva
        </p>

        {/* Links do rodapé */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <Link href="/contato">
            <a className="hover:text-techsea-primary transition-colors">Contato</a>
          </Link>
          <span className="hidden md:inline-block">|</span>
          <a href="[LINK_DO_SEU_LINKEDIN]" target="_blank" rel="noopener noreferrer" className="hover:text-techsea-primary transition-colors">
            LinkedIn
          </a>
          <span className="hidden md:inline-block">|</span>
          <a href="[LINK_DO_SEU_GITHUB]" target="_blank" rel="noopener noreferrer" className="hover:text-techsea-primary transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
