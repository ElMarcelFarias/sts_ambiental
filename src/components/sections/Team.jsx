import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Mail } from 'lucide-react'

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const faqs = [
    {
      question: "Fazemos visitas em campo?",
      answer: "Sim, independente do local, vamos até a área verificar quais são as condições para dar seguimento na análise da consultoria."
    },
    {
      question: "Quais são nossos locais de atuação?",
      answer: "Atendemos todo o Brasil, oferecendo nossos serviços de consultoria ambiental em qualquer região do país."
    },
    {
      question: "Como é nosso processo de trabalho?",
      answer: "Adotamos métodos eficazes e práticos, facilitando todo o desenvolvimento dos projetos com responsabilidade e qualidade."
    }
  ]

  const offices = [
    {
      image: "/images/cd3.jpg",
      title: "Conforto",
      description: "Ambiente climatizado e confortável para melhor atendimento"
    },
    {
      image: "/images/card2.jpeg",
      title: "Completo",
      description: "Estrutura completa com toda tecnologia necessária"
    },
    {
      image: "/images/cd1.png",
      title: "Climatizado",
      description: "Espaço totalmente climatizado para seu conforto"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* FAQ Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* FAQ Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Perguntas <span className="gradient-text">Frequentes</span>
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <img
                src="/images/gestor_ambiente.svg"
                alt="Consultoria especializada"
                className="w-full max-w-lg mx-auto animate-float"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Office Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso <span className="gradient-text">Escritório</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dispomos de um espaço interno com estrutura completa para melhor atender
              nossos clientes e parceiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">#{office.title.toUpperCase()}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {office.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Telefone</h4>
                <p className="text-primary-100">(41) 3722-5782</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">E-mail</h4>
                <p className="text-primary-100">dmambiental@dmambiental.com</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Localização</h4>
                <p className="text-primary-100 text-sm">
                  R. José Gomes, 340 - João Gualberto<br />
                  Paranaguá - PR, 83203-610
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
