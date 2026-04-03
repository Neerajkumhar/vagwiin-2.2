import React from 'react';
import { motion } from 'framer-motion';
import { CircleCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                alt="IT Professionals at Work"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent-blue p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="text-4xl font-bold text-white mb-2">15+</p>
              <p className="text-blue-100 font-medium whitespace-nowrap">Workorders Completed</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-accent-blue tracking-wider uppercase mb-3">About Vagwiin</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-dark mb-6">
              Excellence in IT Hardware & Network Solutions
            </h3>
            <div className="space-y-6 text-base sm:text-lg text-gray-600 mb-8">
              <p>
                At Vagwiin, we specialize in delivering enterprise-grade IT infrastructure solutions tailored to the dynamic needs of modern businesses. Our mission is to bridge the gap between complex technology and operational efficiency.
              </p>
              <p>
                From structural cabling to advanced building automation systems, our experienced engineers implement robust, scalable, and secure hardware foundations that drive business growth and reliability.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                'Industry-certified Engineers',
                'Tailored Enterprise Solutions',
                'Premium Hardware Partners',
                'Commitment to Excellence'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CircleCheck className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <span className="font-medium text-accent-dark">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 bg-accent-dark text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition-colors"
            >
              Consult with an Expert
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
