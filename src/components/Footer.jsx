import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Leaf,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/AmbientalDM",
      label: "Facebook"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/grupo.dmstsambiental",
      label: "Instagram"
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' }
  ]

  const services = [
    'Licenciamento Ambiental',
    'Regularização Fundiária',
    'Cadastro Ambiental Rural',
    'Gestão Ambiental',
    'Topografia',
    'Prontidão Ambiental'
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* WhatsApp floating button */}
      <motion.a
        href="https://wa.me/5541992286947?text=Ol%C3%A1,%20tenho%20algumas%20duvidas%20que%20gostaria%20de%20esclarecer.%20Poderia%20me%20auxiliar?"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        aria-label="Contato via WhatsApp"
      >
        <img src="/images/logowpp.svg" alt="WhatsApp" className="w-8 h-8" />
      </motion.a>

      {/* Main footer content */}
      <div className="section-padding">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {/* Company info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex items-center mb-6"
              >
                <img
                  src="/images/logo.png"
                  alt="STS Ambiental"
                  className="h-12 w-auto rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">STS Ambiental</h3>
                  <p className="text-gray-400 text-sm">Consultoria Ambiental</p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-300 mb-6 leading-relaxed max-w-md"
              >
                Empresa especializada em regularizações ambientais e imobiliárias,
                com foco em entregar estudos de qualidade e soluções com responsabilidade.
              </motion.p>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-3"
              >
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-primary-400" />
                  <span>(41) 3722-5782</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-primary-400" />
                  <span>dmambiental@dmambiental.com</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-primary-400 flex-shrink-0" />
                  <span>R. José Gomes, 340 - João Gualberto<br />Paranaguá - PR, 83203-610</span>
                </div>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex space-x-4 mt-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg font-semibold mb-6 flex items-center"
              >
                <Leaf className="w-5 h-5 mr-2 text-primary-400" />
                Links Rápidos
              </motion.h4>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-3"
              >
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Services */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg font-semibold mb-6 flex items-center"
              >
                <Leaf className="w-5 h-5 mr-2 text-primary-400" />
                Nossos Serviços
              </motion.h4>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3"
              >
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="border-t border-gray-800"
      >
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} STS Ambiental. Todos os direitos reservados.
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                Desenvolvido por{' '}
                <a
                  href="https://www.linkedin.com/in/marcel-leite-de-farias-38b62b220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  Marcel Leite de Farias
                </a>
              </span>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
