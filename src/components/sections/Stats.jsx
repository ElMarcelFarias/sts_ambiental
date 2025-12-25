import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, MapPin, Clock } from 'lucide-react'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [counts, setCounts] = useState({
    experience: 0,
    satisfaction: 0,
    projects: 0,
    response: 0
  })

  const finalCounts = {
    experience: 10,
    satisfaction: 100,
    projects: 500,
    response: 24
  }

  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepTime = duration / steps

      const timers = Object.keys(finalCounts).map(key => {
        const increment = finalCounts[key] / steps
        let currentCount = 0

        return setInterval(() => {
          currentCount += increment
          if (currentCount >= finalCounts[key]) {
            currentCount = finalCounts[key]
            clearInterval(timers.find(timer => timer === this))
          }
          setCounts(prev => ({
            ...prev,
            [key]: Math.floor(currentCount)
          }))
        }, stepTime)
      })

      return () => timers.forEach(timer => clearInterval(timer))
    }
  }, [inView])

  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      number: counts.experience,
      suffix: "+",
      label: "Anos de Experiência",
      description: "Atuando no mercado ambiental",
      color: "text-blue-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: counts.satisfaction,
      suffix: "%",
      label: "Satisfação do Cliente",
      description: "Índice de aprovação dos nossos serviços",
      color: "text-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: counts.projects,
      suffix: "+",
      label: "Projetos Realizados",
      description: "Licenças e regularizações concluídas",
      color: "text-purple-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: counts.response,
      suffix: "h",
      label: "Tempo de Resposta",
      description: "Atendimento rápido e eficiente",
      color: "text-orange-600"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="gradient-text">Números</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados que comprovam nossa excelência e compromisso com a qualidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-gray-50 rounded-2xl p-8 card-hover"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6 ${stat.color}`}
              >
                {stat.icon}
              </motion.div>

              <motion.div
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
              >
                {stat.number}
                <span className={stat.color}>{stat.suffix}</span>
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>

              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Atendimento em Todo o Brasil
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Nossa equipe está preparada para atender projetos em qualquer região do país,
              garantindo a mesma qualidade e agilidade em todos os serviços.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Região Norte</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Região Nordeste</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Região Centro-Oeste</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Região Sudeste</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Região Sul</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
