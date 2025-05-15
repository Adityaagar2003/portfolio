'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiOpenjdk,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiReact,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiTailwindcss,
  SiFigma,
  SiWordpress,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { HiOutlineLightBulb, HiOutlineCode, HiOutlineDesktopComputer } from 'react-icons/hi'
import { skills } from '../data/personal'

interface SkillIcon {
  [key: string]: React.ElementType
}

const skillIcons: SkillIcon = {
  'Java': SiOpenjdk,
  'C++': SiCplusplus,
  'C': SiC,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'React': SiReact,
  'VS Code': VscCode,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Bootstrap': SiBootstrap,
  'Tailwind CSS': SiTailwindcss,
  'Figma': SiFigma,
  'Elementor (for WordPress)': SiWordpress,
}

const skillColors: { [key: string]: string } = {
  'Java': 'text-[#007396]',
  'C++': 'text-[#00599C]',
  'C': 'text-[#A8B9CC]',
  'HTML': 'text-[#E34F26]',
  'CSS': 'text-[#1572B6]',
  'JavaScript': 'text-[#F7DF1E]',
  'Python': 'text-[#3776AB]',
  'React': 'text-[#61DAFB]',
  'VS Code': 'text-[#007ACC]',
  'Git': 'text-[#F05032]',
  'GitHub': 'text-[#181717]',
  'Bootstrap': 'text-[#7952B3]',
  'Tailwind CSS': 'text-[#06B6D4]',
  'Figma': 'text-[#F24E1E]',
  'Elementor (for WordPress)': 'text-[#92003B]',
}

const categoryIcons: SkillIcon = {
  'Technical Skills': HiOutlineCode,
  'Tools and Frameworks': HiOutlineDesktopComputer,
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary dark:text-white">
            Skills & Expertise
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {skills.map((skillCategory, index) => (
            <div key={skillCategory.category}>
              <div className="flex items-center justify-center gap-3 mb-8">
                {categoryIcons[skillCategory.category] && React.createElement(categoryIcons[skillCategory.category], {
                  className: "w-6 h-6 text-primary"
                })}
                <h3 className="text-2xl font-heading font-semibold text-secondary dark:text-white text-center">
                  {skillCategory.category}
                </h3>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              >
                {skillCategory.items.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="group relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-xl transform transition-transform group-hover:scale-95" />
                    {skillIcons[skill] ? React.createElement(skillIcons[skill], {
                      className: `w-12 h-12 ${skillColors[skill] || 'text-primary'} mb-4 relative z-10`
                    }) : (
                      <HiOutlineLightBulb className="w-12 h-12 text-primary mb-4 relative z-10" />
                    )}
                    <span className="text-secondary dark:text-gray-200 font-medium relative z-10 text-center">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}