import React from 'react';
import { motion } from 'framer-motion';
import { Award, Layers, Clock, PiggyBank } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Engineers',
    description: 'Our team comprises highly certified and experienced IT hardware professionals dedicated to excellence.'
  },
  {
    icon: Layers,
    title: 'End-to-End Solutions',
    description: 'From planning and procurement to implementation and maintenance, we offer comprehensive services.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support ensures your critical infrastructure remains continuously operational.'
  },
  {
    icon: PiggyBank,
    title: 'Cost-Effective Services',
    description: 'We deliver superior value by optimizing hardware investments without compromising on quality or performance.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-accent-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/10 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-400 tracking-wider uppercase mb-3">Why Partner With Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            The Vagwiin Advantage
          </h3>
          <p className="text-lg text-gray-300">
            We don't just supply hardware; we build lasting technology partnerships focused on your long-term success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 bg-accent-blue/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
