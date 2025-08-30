import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()

      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone para contato",
      description: "Estamos ansiosos para conversarmos!",
      value: "+55 (41) 3722-5782",
      link: "tel:+5541372257822"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail para contato",
      description: "Estamos esperando seu contato via email!",
      value: "dmambiental@dmambiental.com",
      link: "mailto:dmambiental@dmambiental.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      description: "R. José Gomes, 340 - João Gualberto, Paranaguá - PR, 83203-610",
      value: "Ver no Google Maps",
      link: "https://www.google.com/maps/place/R.+Jos%C3%A9+Gomes,+340+-+Jo%C3%A3o+Gualberto,+Paranagu%C3%A1+-+PR,+83203-610"
    }
  ]

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender suas necessidades em consultoria ambiental.
            Entre em contato conosco e solicite um orçamento personalizado.
          </p>
        </motion.div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-gray-50 rounded-2xl p-8 card-hover"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-2xl mb-6">
                {info.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {info.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm">
                {info.description}
              </p>

              <motion.a
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.05 }}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
              >
                {info.value}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Contact form and image */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite seu Orçamento
            </h3>

            {/* Status messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      {...register('nome', { required: 'Nome é obrigatório' })}
                      type="text"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 ${
                        errors.nome ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  {errors.nome && (
                    <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      {...register('telefone', { required: 'Telefone é obrigatório' })}
                      type="tel"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 ${
                        errors.telefone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  {errors.telefone && (
                    <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    {...register('email', {
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'E-mail inválido'
                      }
                    })}
                    type="email"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="seu@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <select
                  {...register('assunto', { required: 'Assunto é obrigatório' })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 ${
                    errors.assunto ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="orcamento">Orçamento</option>
                  <option value="duvida">Dúvida</option>
                  <option value="trabalhe-conosco">Trabalhe conosco</option>
                  <option value="outros">Outros</option>
                </select>
                {errors.assunto && (
                  <p className="text-red-500 text-sm mt-1">{errors.assunto.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    {...register('mensagem', { required: 'Mensagem é obrigatória' })}
                    rows={4}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-none ${
                      errors.mensagem ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Descreva sua necessidade ou dúvida..."
                  />
                </div>
                {errors.mensagem && (
                  <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner w-5 h-5 mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Image and additional info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="relative">
              <img
                src="/images/email.svg"
                alt="Entre em contato"
                className="w-full max-w-lg mx-auto animate-float"
                loading="lazy"
              />
            </div>

            <div className="bg-primary-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Por que escolher a STS Ambiental?
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Atendimento personalizado e humanizado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Resposta rápida em até 24 horas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Orçamento sem compromisso</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Consultoria especializada gratuita</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7201.094673701738!2d-48.511592!3d-25.520139000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db9a5c61497b59%3A0xb229d5f57354dddf!2sR.%20Jos%C3%A9%20Gomes%2C%20340%20-%20Jo%C3%A3o%20Gualberto%2C%20Paranagu%C3%A1%20-%20PR%2C%2083203-610!5e0!3m2!1spt-BR!2sbr!4v1660245759618!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização STS Ambiental"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
