import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-techsea-background flex items-center justify-center min-h-screen">
      <div className="container px-4 md:px-12 py-8 text-center max-w-2xl">
        <h1 className="font-heading text-5xl md:text-6xl text-techsea-secondary leading-tight mb-4">
          Desenvolvimento Web com Propósito e Eficiência
        </h1>
        <p className="font-body text-xl md:text-2xl text-techsea-secondary mb-8">
          Sou Sara Silva, desenvolvedora web focada em frontend, análise de dados e automações. Acredito que a tecnologia deve ser usada para criar soluções sustentáveis e impactar positivamente o mundo.
        </p>
        <Link href="/contact" className="inline-block bg-techsea-primary text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-[#008f92]">
          Solicite um orçamento
        </Link>
      </div>
    </main>
  );
}