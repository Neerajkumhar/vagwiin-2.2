import React from 'react';
import { motion } from 'framer-motion';
import WhyChooseUs from '../components/WhyChooseUs';
import { Target, Lightbulb, Users, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="pt-24 min-h-screen bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-accent-dark py-24 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-500/10 blur-3xl rounded-full" />
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are the premier architects of enterprise IT infrastructure. Discover our mission, our values, and the experts behind our success.
            </p>
          </motion.div>
        </div>
      </div>



      {/* Mission and Vision */}
      <section className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-3xl p-10 md:p-12 border border-blue-100"
            >
              <div className="w-14 h-14 bg-accent-blue rounded-xl flex items-center justify-center mb-8 shadow-md">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-accent-dark mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower global businesses by providing robust, scalable, and secure IT hardware infrastructure. We strive to eliminate technological friction, ensuring our clients can focus entirely on growth and innovation.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-3xl p-10 md:p-12 border border-gray-200"
            >
              <div className="w-14 h-14 bg-accent-dark rounded-xl flex items-center justify-center mb-8 shadow-md">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-accent-dark mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the world's most trusted partner in physical enterprise networking and building automation, setting the gold standard for quality, reliability, and technological excellence in the hardware sector.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <div className="my-10">
        <WhyChooseUs />
      </div>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-accent-dark mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-accent-blue">
                 <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-accent-dark">Integrity & Trust</h3>
              <p className="text-gray-600">We maintain the highest ethical standards in every installation and partnership.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-accent-blue">
                 <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-accent-dark">Innovation</h3>
              <p className="text-gray-600">Always adopting the latest hardware advancements to future-proof your business.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-accent-blue">
                 <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-accent-dark">Client-Centricity</h3>
              <p className="text-gray-600">Your operational success is the singular metric by which we measure our own.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent-dark to-black py-20 mt-10">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to work with the best?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg hover:text-white transition-colors duration-300">
            Reach out to our executive team to discover how our expertise can revolutionize your IT capabilities.
          </p>
          <a
            href="/contact"
            className="inline-flex justify-center items-center bg-accent-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg"
          >
            Contact Vagwiin Today
          </a>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
