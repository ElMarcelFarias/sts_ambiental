import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Target, Users, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Qualidade",
      description: "Estudos técnicos de excelência com metodologia comprovada"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Equipe Especializada",
      description: "Profissionais multidisciplinares com vasta experiência"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Agilidade",
      description: "Processos otimizados para entregas no prazo"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Responsabilidade",
      description: "Compromisso com a sustentabilidade e meio ambiente"
    }
  ]

  const benefits = [
    "Quase 10 anos de experiência no mercado",
    "Equipe completa e especializada",
    "Agilidade e praticidade perante órgãos públicos",
    "Comunicação facilitada",
    "Atendimento personalizado",
    "Soluções sustentáveis"
  ]

  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-sm font-medium">Sobre a STS Ambiental</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Prezamos pela{' '}
              <span className="gradient-text">Excelência</span>{' '}
              e celeridade no atendimento
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Formada por uma equipe multidisciplinar, nosso maior objetivo é prestar uma
              consultoria de excelência, atendendo todas as necessidades concernentes às
              questões ambientais e imobiliárias de forma célere e completa.
            </motion.p>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-3 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Features grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 card-hover"
                >
                  <div className="text-primary-600 mb-2">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                src="/images/sobre.svg"
                alt="Sobre a empresa"
                className="w-full max-w-lg mx-auto animate-float"
                loading="lazy"
              />

              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl -z-10 transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary-50 to-primary-100 rounded-3xl -z-20 transform -rotate-3" />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-lg p-4 glass-effect"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">10+</div>
                <div className="text-xs text-gray-600">Anos</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-lg p-4 glass-effect"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-xs text-gray-600">Satisfação</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
