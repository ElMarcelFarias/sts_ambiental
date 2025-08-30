import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      name: "João Silva",
      company: "Empresa Rural Ltda",
      text: "Excelente trabalho na regularização do nosso CAR. Equipe muito profissional e atendimento rápido.",
      rating: 5,
      image: "/images/prontidao1.jpeg"
    },
    {
      name: "Maria Santos",
      company: "Construtora ABC",
      text: "A STS nos ajudou com todo o licenciamento ambiental do nosso empreendimento. Recomendo!",
      rating: 5,
      image: "/images/prontidao2.jpeg"
    },
    {
      name: "Carlos Oliveira",
      company: "Indústria XYZ",
      text: "Profissionais competentes e processos bem organizados. Conseguimos nossa licença no prazo.",
      rating: 5,
      image: "/images/prontidao3.jpeg"
    }
  ]

  const achievements = [
    {
      title: "Resiliência Ambiental",
      description: "Projetos focados na recuperação e preservação de ecossistemas",
      image: "/images/prontidao1.jpeg"
    },
    {
      title: "Vigilância Ambiental",
      description: "Monitoramento contínuo para garantir conformidade ambiental",
      image: "/images/prontidao2.jpeg"
    },
    {
      title: "Conscientização em Prática",
      description: "Educação ambiental aplicada em todos os nossos projetos",
      image: "/images/prontidao3.jpeg"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Prontidão Ambiental */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prontidão <span className="gradient-text">Ambiental</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa <span className="text-primary-600 font-semibold">prontidão</span> ambiental é evidenciada em cada ação.
            Comprometidos com a sustentabilidade, adotamos medidas proativas para preservar o meio ambiente,
            garantindo um futuro mais verde e promissor para todos.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              O que nossos <span className="gradient-text">clientes</span> dizem
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Depoimentos reais de clientes satisfeitos com nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover relative"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Projetos Aprovados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">24h</div>
                <div className="text-sm text-gray-600">Tempo de Resposta</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Clientes Atendidos</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
