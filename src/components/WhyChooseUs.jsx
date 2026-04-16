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
    <section className="relative mt-8 py-24 bg-gradient-to-br from-accent-dark via-slate-900 to-accent-dark text-white overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-4xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-4xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Why Partner With Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            The Vagwiin Advantage
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We don't just supply hardware; we build lasting technology partnerships focused on your long-term success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 to-cyan-400/0 group-hover:from-accent-blue/30 group-hover:to-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 p-8 rounded-2xl group-hover:bg-white/10 transition-all h-full overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: index * 0.2 }}
                    className="relative w-14 h-14 bg-gradient-to-br from-blue-500/30 to-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-500/50 group-hover:to-cyan-500/20 transition-all group-hover:shadow-lg group-hover:shadow-blue-500/20"
                  >
                    <Icon className="w-7 h-7 text-blue-300 group-hover:text-blue-200 transition-colors" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold mb-3 group-hover:text-blue-200 transition-colors relative">{feature.title}</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors relative">{feature.description}</p>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-blue/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
