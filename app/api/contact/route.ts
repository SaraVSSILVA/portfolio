import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// É crucial usar variáveis de ambiente para credenciais de e-mail por segurança!
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail', // Você pode usar qualquer serviço (ex: Outlook, Yahoo)
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Verificação básica para garantir que todos os campos foram enviados
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Campos faltando' }, { status: 400 });
    }

    const mailOptions = {
      from: emailUser,
      to: emailUser, // O e-mail de destino
      subject: `Nova mensagem de contato de ${name}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ message: 'Erro ao enviar a mensagem.' }, { status: 500 });
  }
}