'use client';

import { useState } from 'react';

export const ContactForm = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        event.currentTarget.reset(); // Limpa o formulário
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-techsea-secondary font-body font-semibold mb-2">Seu Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-techsea-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-techsea-secondary font-body font-semibold mb-2">Seu E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-techsea-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-techsea-secondary font-body font-semibold mb-2">Sua Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-techsea-primary"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-techsea-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-[#008f92] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
      {status === 'success' && <p className="mt-4 text-green-600">Mensagem enviada com sucesso!</p>}
      {status === 'error' && <p className="mt-4 text-red-600">Ocorreu um erro. Tente novamente.</p>}
    </form>
  );
};