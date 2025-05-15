'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-secondary dark:text-white">
              Hi, I'm{' '}
              <span className="text-primary">Aditya Agarwal</span>
            </h1>
            <h2 className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
              Full Stack Developer & Designer
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              I create beautiful, functional, and user-friendly digital experiences. 
              With a passion for clean code and elegant design, I help businesses 
              bring their vision to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-primary text-primary dark:text-primary rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto">
              <div className="w-full h-full rounded-full bg-primary/5 dark:bg-primary/10 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Aditya Agarwal"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 