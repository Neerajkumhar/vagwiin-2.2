import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-white" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-accent-blue text-xs sm:text-sm font-medium mb-6 max-w-full shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="truncate">Trusted IT Infrastructure Partner</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent-dark leading-tight mb-6">
              Empowering Infrastructure with <span className="text-accent-blue">Smart IT Solutions</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Reliable, scalable & secure hardware solutions for modern businesses. We build the foundation your enterprise needs to thrive in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 bg-accent-blue text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 group"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center gap-2 bg-white text-accent-dark border border-gray-200 px-8 py-3.5 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                Our Services
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by Industry Leaders</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl pb-[75%]">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
                alt="Server Room Infrastructure"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4"
            >
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase">System Status</p>
                <p className="text-sm font-bold text-accent-dark">99.99% Uptime</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
