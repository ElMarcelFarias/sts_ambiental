import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Clock,
  Users,
  Award,
  MessageCircle,
  Globe,
  Shield,
  Zap,
  Heart
} from 'lucide-react'

const Differentials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const differentials = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quase 10 anos de experiência",
      description: "Sólida trajetória no mercado ambiental com expertise comprovada",
      color: "bg-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipe completa e especializada",
      description: "Profissionais multidisciplinares altamente qualificados",
      color: "bg-green-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agilidade perante órgãos públicos",
      description: "Processos otimizados para aprovações mais rápidas",
      color: "bg-yellow-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Comunicação facilitada",
      description: "Atendimento personalizado e transparente em todas as etapas",
      color: "bg-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Atendimento nacional",
      description: "Cobertura em todo território brasileiro com a mesma qualidade",
      color: "bg-indigo-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compromisso ambiental",
      description: "Soluções sustentáveis que respeitam o meio ambiente",
      color: "bg-emerald-500"
    }
  ]

  const teamMembers = [
    "Engenheiro Ambiental",
    "Engenheiro Civil",
    "Engenheiro de Segurança do Trabalho",
    "Gestor Ambiental",
    "Biólogo",
    "Geólogo",
    "Topógrafo",
    "Advogado Consultor"
  ]

  return (
    <section id="diferenciais" className="section-padding bg-white">
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
            Nossos <span className="gradient-text">Diferenciais</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O que nos torna únicos no mercado de consultoria ambiental
          </p>
        </motion.div>

        {/* Differentials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-2xl p-8 text-center card-hover group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white mb-6 ${item.color}`}
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Team info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="inline-flex items-center bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Nosso Corpo Técnico</span>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Equipe Multidisciplinar de <span className="gradient-text">Especialistas</span>
            </h3>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa força está na diversidade de conhecimentos. Contamos com profissionais
              especializados em diferentes áreas, garantindo soluções completas e integradas
              para todos os tipos de projetos ambientais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{member}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                src="/images/gestor_ambiente.svg"
                alt="Equipe especializada"
                className="w-full max-w-lg mx-auto animate-float"
                loading="lazy"
              />

              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl -z-10 transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary-50 to-primary-100 rounded-3xl -z-20 transform -rotate-6" />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 glass-effect"
            >
              <div className="flex items-center">
                <Award className="w-6 h-6 text-yellow-500 mr-2" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">Certificados</div>
                  <div className="text-xs text-gray-600">Profissionais</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 glass-effect"
            >
              <div className="flex items-center">
                <Heart className="w-6 h-6 text-red-500 mr-2" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">Dedicação</div>
                  <div className="text-xs text-gray-600">Total</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Differentials
