import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <main className="pt-24 min-h-screen bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-accent-dark py-24 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Whether you have a question about our enterprise hardware solutions, pricing, or need immediate support, our team is ready to answer your questions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Contact Form & Details Section */}
      <div className="-mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <Contact />
        </div>
      </div>
      
      {/* Additional Supporting Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-xl font-bold text-accent-dark mb-3">Global Headquarters</h3>
              <p className="text-gray-600">
                iStart Nest Center, Vikramaditya Nagar,<br/>
                Surya Colony, Jodhpur, Rajasthan 342011
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent-dark mb-3">Direct Support</h3>
              <p className="text-gray-600">
                Email: support@vagwiin.com<br/>
                Phone: +91 94619 91604
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent-dark mb-3">Operating Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM<br/>
                SOC Support: 24/7/365
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
