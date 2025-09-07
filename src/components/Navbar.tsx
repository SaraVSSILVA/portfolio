import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" passHref legacyBehavior>
          <a className="transition-transform transform hover:scale-105">
            <Image
              src="https://i.imgur.com/Bm8U1PK.png"
              alt="Logo TechSea"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </a>
        </Link>

        {/* Links de navegação */}
        <ul className="flex space-x-6 text-techsea-secondary font-body font-semibold">
          <li>
            <Link href="/" passHref legacyBehavior>
              <a className="hover:text-techsea-primary transition-colors">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre" passHref legacyBehavior>
              <a className="hover:text-techsea-primary transition-colors">Sobre Mim</a>
            </Link>
          </li>
          <li>
            <Link href="/projetos" passHref legacyBehavior>
              <a className="hover:text-techsea-primary transition-colors">Projetos</a>
            </Link>
          </li>
          <li>
            <Link href="/contato" passHref legacyBehavior>
              <a className="bg-techsea-primary text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors">Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};