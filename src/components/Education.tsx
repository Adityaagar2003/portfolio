'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi'
import { education } from '../data/personal'

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary">
            Education
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <div className="flex items-center gap-3 text-primary mb-4">
              <FiBookOpen className="w-6 h-6" />
              <h3 className="text-2xl font-heading font-semibold">
                {education.degree}
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-600">
                <FiAward className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">{education.institution}</p>
                  <p>{education.field}</p>
                  <p className="text-primary font-medium mt-1">{education.gpa}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <FiCalendar className="w-5 h-5" />
                <p>{education.duration}</p>
              </div>
            </div>
          </div>
          <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
        </motion.div>
      </div>
    </section>
  )
} 