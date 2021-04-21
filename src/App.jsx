import React, { useState } from 'react'
import Section from './components/Section'

import Intro from './components/Intro'
import Info from './components/Info'
import Languages from './components/Languages'
import Pro from './components/Pro'
import Publications from './components/Publications'
import Skills from './components/Skills'
import Summary from './components/Summary'
import Trainings from './components/Trainings'

import logo from './logo.svg'
import './App.scss'

/* import './components/Tag.scss' */

function App() {
  return (
    <div className="app">
      <div className="app-inner">
        <Section>
          <Intro />
        </Section>

        <Section title="Short summary">
          <Summary />
        </Section>

        <Section title="Professional Records">
          <Pro />
        </Section>

        <Section title="Trainings">
          <Trainings />
        </Section>

        <Section title="Skills">
          <Skills />
        </Section>

        <Section title="Publications">
          <Publications />
        </Section>

        <Section title="Languages">
          <Languages />
        </Section>

        <Section title="Additional Information">
          <Info />
        </Section>
      </div>
    </div>
  )
}

export default App
