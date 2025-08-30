import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, ArrowRight } from 'lucide-react'

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-primary-800/95 z-10" />
        <img
          src="/images/dm2.jpg"
          alt="Litoral do Paraná"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full backdrop-blur-sm"
        />
      </div>

      <div className="container-custom relative z-30">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
          >
            <span className="text-sm font-medium">Nosso Compromisso com o Litoral</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Preservando o <span className="text-primary-200">Litoral Paranaense</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            O Litoral do Paraná é uma região de extrema relevância para todo o território nacional.
            Com cerca de 100 km de extensão, apresenta uma importante área portuária, praias e ilhas.
            Dedicamos todos os nossos esforços para manter o seu aproveitamento com máximo enfoque na sustentabilidade.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-200 mb-2">100km</div>
              <div className="text-gray-200">de Extensão</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-200 mb-2">125</div>
              <div className="text-gray-200">Praias e Balneários</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-200 mb-2">57+</div>
              <div className="text-gray-200">Ilhas no Litoral</div>
            </div>
          </motion.div>

          {/* Video and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            {/* Video button */}
            <motion.a
              href="https://www.youtube.com/watch?v=x3KhFjcbqJw"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group relative"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:bg-white/30 transition-all duration-300">
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </div>
              <div className="absolute inset-0 rounded-full bg-white/10 animate-ping" />
            </motion.a>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium mb-2">Conheça nosso trabalho</p>
              <p className="text-gray-200 text-sm">Assista ao vídeo sobre nossa atuação</p>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center group text-lg"
            >
              Solicitar Consultoria Ambiental
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
