import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-primary-600 text-white py-2 hidden lg:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>(41) 3722-5782</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>dmambiental@dmambiental.com</span>
              </div>
            </div>
            <div className="text-sm">
              Atendimento em todo o Brasil
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-2 md:py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img
                src="/images/logo.png"
                alt="STS Ambiental"
                className="h-10 md:h-12 lg:h-16 w-auto rounded-lg"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-white hover:text-primary-200'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                onClick={() => scrollToSection('#contato')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Solicitar Orçamento
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t shadow-lg"
            >
              <div className="container-custom py-4">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      whileHover={{ x: 10 }}
                      className="text-left text-gray-700 hover:text-primary-600 font-medium py-2"
                    >
                      {item.name}
                    </motion.button>
                  ))}

                  <motion.button
                    onClick={() => scrollToSection('#contato')}
                    whileHover={{ scale: 1.02 }}
                    className="btn-primary w-full mt-4"
                  >
                    Solicitar Orçamento
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar
