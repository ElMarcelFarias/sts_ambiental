import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Leaf,
  FileText,
  Shield,
  Map,
  TreePine,
  Building,
  Recycle,
  AlertTriangle,
  ChevronRight,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeCategory, setActiveCategory] = useState('licenciamento')

  const categories = [
    {
      id: 'licenciamento',
      name: 'Licenciamento Ambiental',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      id: 'regularizacao',
      name: 'Regularização',
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'gestao',
      name: 'Gestão Ambiental',
      icon: <Leaf className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      id: 'topografia',
      name: 'Topografia',
      icon: <Map className="w-6 h-6" />,
      color: 'bg-orange-500'
    }
  ]

  const services = {
    licenciamento: [
      {
        title: 'Licenciamento Ambiental',
        description: 'Obtenção de licenças prévia, de instalação e operação',
        icon: <Shield className="w-8 h-8" />
      },
      {
        title: 'Laudo Técnico Ambiental',
        description: 'Avaliação técnica de impactos e condições ambientais',
        icon: <FileText className="w-8 h-8" />
      },
      {
        title: 'Estudo de Impacto de Vizinhança - EIV',
        description: 'Análise dos impactos de empreendimentos urbanos',
        icon: <Building className="w-8 h-8" />
      },
      {
        title: 'Plano de Controle Ambiental - PCA',
        description: 'Medidas de controle e monitoramento ambiental',
        icon: <AlertTriangle className="w-8 h-8" />
      }
    ],
    regularizacao: [
      {
        title: 'Cadastro Ambiental Rural - CAR',
        description: 'Registro de propriedades rurais no SICAR',
        icon: <Map className="w-8 h-8" />
      },
      {
        title: 'Regularização Fundiária',
        description: 'Legalização de ocupações urbanas e rurais',
        icon: <Building className="w-8 h-8" />
      },
      {
        title: 'Georreferenciamento',
        description: 'Levantamento topográfico georreferenciado',
        icon: <Map className="w-8 h-8" />
      },
      {
        title: 'Cadastro de Áreas Rurais no Incra',
        description: 'Registro e certificação de imóveis rurais',
        icon: <FileText className="w-8 h-8" />
      }
    ],
    gestao: [
      {
        title: 'Plano de Gestão Ambiental',
        description: 'Estratégias para gestão sustentável de recursos',
        icon: <Leaf className="w-8 h-8" />
      },
      {
        title: 'Programas de Educação Ambiental',
        description: 'Capacitação e conscientização ambiental',
        icon: <Recycle className="w-8 h-8" />
      },
      {
        title: 'Projeto de Recuperação de Áreas Degradadas - PRAD',
        description: 'Restauração de ecossistemas degradados',
        icon: <TreePine className="w-8 h-8" />
      },
      {
        title: 'Plano de Gerenciamento de Resíduos Sólidos - PGRS',
        description: 'Gestão adequada de resíduos sólidos',
        icon: <Recycle className="w-8 h-8" />
      }
    ],
    topografia: [
      {
        title: 'Levantamento Planialtimétrico',
        description: 'Mapeamento detalhado do terreno',
        icon: <Map className="w-8 h-8" />
      },
      {
        title: 'Topografia',
        description: 'Levantamentos topográficos precisos',
        icon: <Map className="w-8 h-8" />
      },
      {
        title: 'Projeto de Arborização Urbana',
        description: 'Planejamento de áreas verdes urbanas',
        icon: <TreePine className="w-8 h-8" />
      },
      {
        title: 'Plantios de Reflorestamento',
        description: 'Implementação de áreas de reflorestamento',
        icon: <TreePine className="w-8 h-8" />
      }
    ]
  }

  return (
    <section id="servicos" className="section-padding bg-gray-50">
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
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em consultoria ambiental e regularização imobiliária
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className={`mr-2 ${activeCategory === category.id ? 'text-white' : 'text-primary-600'}`}>
                {category.icon}
              </span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Services grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {services[activeCategory].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">Serviço Disponível</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de um serviço específico?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nossa equipe multidisciplinar está preparada para atender demandas customizadas.
              Entre em contato e vamos encontrar a melhor solução para seu projeto.
            </p>

            <motion.button
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center"
            >
              Solicitar Consultoria
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
