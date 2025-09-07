import Head from 'next/head';
import Image from 'next/image';

export default function SobreMim() {
  return (
    <>
      <Head>
        <title>Sobre Mim | TechSea</title>
      </Head>

      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 md:px-12">
          {/* Título Principal */}
          <h1 className="font-heading text-4xl md:text-5xl text-techsea-secondary text-center mb-8 md:mb-12">
            Sobre Mim
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12">
            {/* Foto de Perfil */}
            <div className="w-full md:w-1/3 flex-shrink-0 mb-8 md:mb-0">
              {/* Você pode substituir a imagem por uma sua */}
              <div className="bg-techsea-background rounded-lg overflow-hidden shadow-lg p-4">
                <Image
                  src="https://via.placeholder.com/400x400.png?text=Sua+Foto+Aqui"
                  alt="Foto de perfil de Sara Silva"
                  width={400}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Texto da Bio */}
            <div className="w-full md:w-2/3">
              <p className="font-body text-lg md:text-xl text-techsea-secondary leading-relaxed mb-6">
                Olá! Sou Sara Silva, desenvolvedora web com foco em **frontend**, **análise de dados** e **automações**. Com 24 anos e cursando ADS, busco aprimorar minhas habilidades técnicas e de lógica para criar soluções que transformam.
              </p>
              <p className="font-body text-lg md:text-xl text-techsea-secondary leading-relaxed mb-6">
                Acredito no poder da tecnologia para revolucionar o mundo e vejo a **sustentabilidade** como o único caminho. Essa paixão se traduz em projetos pessoais como o **EcoEchos**, uma calculadora de pegada de carbono gamificada, e o **Letrário**, uma API para gerenciar acervos de livros.
              </p>
              <p className="font-body text-lg md:text-xl text-techsea-secondary leading-relaxed">
                Minha abordagem é **direta, confiante e entusiasmada**. Sou fascinada pela vida marinha e pela biologia, o que me inspira a buscar a eficiência e a precisão em cada linha de código.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}