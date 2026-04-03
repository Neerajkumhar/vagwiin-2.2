import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jennings',
    role: 'CTO, TechCorp Solutions',
    content: 'Vagwiin transformed our entire server infrastructure. Their expertise in enterprise networks significantly reduced our latency and improved overall operational efficiency.',
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'Michael Chen',
    role: 'Facilities Manager, Apex Towers',
    content: 'The building automation and surveillance systems installed by Vagwiin are truly state-of-the-art. Their team was professional, timely, and delivered beyond our expectations.',
    avatar: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'Emily Rodriguez',
    role: 'IT Director, Global Retail Inc.',
    content: 'From structured cabling to setting up our telepresence rooms, Vagwiin handled everything seamlessly. They are our go-to partner for all hardware needs.',
    avatar: 'https://i.pravatar.cc/150?img=5'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent-blue tracking-wider uppercase mb-3">Client Success Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-accent-dark mb-6">
            Trusted by Industry Leaders
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <MessageSquareQuote className="absolute top-6 right-6 w-10 h-10 text-blue-50/80" />
              <p className="text-gray-600 mb-8 relative z-10 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-accent-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Client Logos Placeholder */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Our Trusted Partners</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using simple text placeholders for logos */}
            {['Acme Corp', 'GlobalNet', 'TechFlow', 'SecureDev', 'CloudSync'].map((logo, i) => (
              <div key={i} className="text-xl font-bold text-gray-400 flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
