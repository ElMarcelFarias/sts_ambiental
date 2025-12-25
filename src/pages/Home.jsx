import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Differentials from '../components/sections/Differentials'
import Stats from '../components/sections/Stats'
import Team from '../components/sections/Team'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'
import CTA from '../components/sections/CTA'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>STS Ambiental - Consultoria Ambiental e Imobiliária | Licenciamento e Regularização</title>
        <meta name="description" content="STS Ambiental oferece consultoria especializada em licenciamento ambiental, regularização imobiliária e prontidão ambiental. Atendemos todo o Brasil com qualidade e agilidade." />
      </Helmet>

      <div className="overflow-x-hidden">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Differentials />
        <Team />
        <CTA />
        <Testimonials />
        <Contact />
      </div>
    </>
  )
}

export default Home
