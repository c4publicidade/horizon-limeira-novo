import React, { useState } from 'react';
import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { leadsAPI } from '../services/api';

// Função para mascarar telefone no formato (99) 99999-9999
const formatPhoneNumber = (value: string): string => {
  // Remove tudo que não é dígito
  const digits = value.replace(/\D/g, '');
  
  // Limita a 11 dígitos (Brasil)
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await leadsAPI.create(formData);
      
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Remove mensagem de sucesso após 5 segundos
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar formulário');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Aplicar máscara de telefone se for o campo phone
    if (name === 'phone') {
      const maskedValue = formatPhoneNumber(value);
      setFormData({
        ...formData,
        [name]: maskedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="h-px w-16 bg-wine mb-8 mx-auto" />
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-primary to-wine bg-clip-text text-transparent">
            Contato
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Entre em contato e agende sua visita
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-wine mt-1" strokeWidth={1.5} />
                <div>
                  <div className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Telefone</div>
                  <a href="tel:+5519998311427" className="text-lg text-dark hover:text-wine transition-colors">
                    (19) 99831-1427
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={24} className="text-wine mt-1" strokeWidth={1.5} />
                <div>
                  <div className="text-sm text-gray-500 mb-1 uppercase tracking-wider">E-mail</div>
                  <a href="mailto:contato@horizonlimeira.com.br" className="text-lg text-dark hover:text-wine transition-colors">
                    contato@horizonlimeira.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-wine mt-1" strokeWidth={1.5} />
                <div>
                  <div className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Endereço</div>
                  <div className="text-lg text-dark">
                    Limeira - SP
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-wine pl-6">
              <h3 className="text-2xl mb-4 text-dark">Horário de Atendimento</h3>
              <div className="space-y-2 text-gray-600 font-light">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábados: 10h às 16h</p>
                <p>Domingos: Sob agendamento</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mensagem de Sucesso */}
              {success && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500" size={24} />
                    <p className="text-green-700 font-medium">
                      Mensagem enviada com sucesso! Em breve entraremos em contato.
                    </p>
                  </div>
                </div>
              )}

              {/* Mensagem de Erro */}
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              )}

              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="Nome"
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:outline-none focus:border-wine transition-colors bg-transparent text-lg disabled:opacity-50"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="E-mail"
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:outline-none focus:border-wine transition-colors bg-transparent text-lg disabled:opacity-50"
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="Telefone"
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:outline-none focus:border-wine transition-colors bg-transparent text-lg disabled:opacity-50"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows={4}
                  placeholder="Mensagem"
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:outline-none focus:border-wine transition-colors resize-none bg-transparent text-lg disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-wine text-white py-5 hover:bg-wine-dark transition-colors duration-300 text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}