import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error on type
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section id="contact" className="relative mt-8 py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-accent-blue/20 text-accent-blue text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-accent-dark mb-6">
            Ready to Upgrade Your Infrastructure?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Contact our team of experts today to discuss your IT hardware and network requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-gradient-to-br from-white to-blue-50/20 p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-bold text-accent-dark mb-6">Contact Information</h4>

              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all group-hover:scale-110">
                    <MapPin className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <h5 className="font-bold text-accent-dark mb-1 group-hover:text-accent-blue transition-colors">Our Location</h5>
                    <p className="text-gray-600">iStart Nest Center, Vikramaditya Nagar,<br />Surya Colony, Jodhpur, Rajasthan 342011</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all group-hover:scale-110">
                    <Phone className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <h5 className="font-bold text-accent-dark mb-1 group-hover:text-accent-blue transition-colors">Phone Number</h5>
                    <p className="text-gray-600">+91 94619 91604</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all group-hover:scale-110">
                    <Mail className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <h5 className="font-bold text-accent-dark mb-1 group-hover:text-accent-blue transition-colors">Email Address</h5>
                    <p className="text-gray-600">contact@vagwiin.com<br />support@vagwiin.com</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg border border-gray-100">
              {/* Placeholder for Google Map */}
              <iframe
                title="Vagwiin Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.0456842363556!2d73.02279707491847!3d26.260180677042158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d3f33afcb6f%3A0x5bdfc0298960d25c!2sVagwiin!5e0!3m2!1sen!2sin!4v1775139368608!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-gradient-to-br from-white to-blue-50/30 p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100/50 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileHover={{ y: -2 }} className="relative group">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all outline-none ${
                      errors.name 
                        ? 'border-red-500 bg-red-50/10' 
                        : 'border-gray-200 group-hover:border-accent-blue/30 focus:border-accent-blue bg-white group-hover:bg-blue-50/10'
                    } focus:ring-2 focus:ring-accent-blue/20`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1 font-medium">{errors.name}</p>}
                </motion.div>

                <motion.div whileHover={{ y: -2 }} className="relative group">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all outline-none ${
                      errors.email 
                        ? 'border-red-500 bg-red-50/10' 
                        : 'border-gray-200 group-hover:border-accent-blue/30 focus:border-accent-blue bg-white group-hover:bg-blue-50/10'
                    } focus:ring-2 focus:ring-accent-blue/20`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1 font-medium">{errors.email}</p>}
                </motion.div>
              </div>

              <motion.div whileHover={{ y: -2 }} className="relative group">
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 group-hover:border-accent-blue/30 focus:border-accent-blue bg-white group-hover:bg-blue-50/10 transition-all outline-none focus:ring-2 focus:ring-accent-blue/20"
                  placeholder="+91 9461991604"
                />
              </motion.div>

              <motion.div whileHover={{ y: -2 }} className="relative group">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all outline-none resize-none ${
                    errors.message 
                      ? 'border-red-500 bg-red-50/10' 
                      : 'border-gray-200 group-hover:border-accent-blue/30 focus:border-accent-blue bg-white group-hover:bg-blue-50/10'
                  } focus:ring-2 focus:ring-accent-blue/20`}
                  placeholder="Tell us about your project requirements..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1 font-medium">{errors.message}</p>}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-accent-blue to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <Send className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
