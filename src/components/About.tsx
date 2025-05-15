'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary dark:text-white">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-heading font-semibold text-secondary dark:text-white">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate Full Stack Developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies and a deep understanding of both front-end and back-end development, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My journey in tech has equipped me with a diverse skill set and the ability to tackle complex challenges. I believe in writing maintainable code and creating scalable solutions that make a real impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-heading font-semibold text-secondary dark:text-white">
              What I Do
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <h4 className="font-heading font-semibold text-primary">Web Development</h4>
                <p className="text-gray-600 dark:text-gray-300">Building responsive and performant web applications using modern frameworks and best practices.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <h4 className="font-heading font-semibold text-primary">UI/UX Design</h4>
                <p className="text-gray-600 dark:text-gray-300">Creating intuitive and beautiful user interfaces that provide exceptional user experiences.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <h4 className="font-heading font-semibold text-primary">Problem Solving</h4>
                <p className="text-gray-600 dark:text-gray-300">Analyzing complex problems and delivering efficient, scalable solutions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}