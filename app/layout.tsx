import './globals.css' 
import { ReactNode } from 'react'
import { Navbar } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'

export const metadata = {
    title: 'TechSea | Sara Silva',
    description: 'Desenvolvimento Web & Análise de Dados',
}



export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-br">
            <body className="bg-blue-300 text-techsea-dark font-body">
                <Navbar />
                <main className="min-h-screen px-4 md:px-12 py-8">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
