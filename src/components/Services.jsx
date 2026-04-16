import React from 'react';
import { motion } from 'framer-motion';
import {
  Network,
  Zap,
  Camera,
  Building2,
  UtensilsCrossed,
  Heart,
  Package,
  Headphones,
  Cloud,
  Smartphone,
  Lock,
  Hammer
} from 'lucide-react';

const servicesData = [
  {
    title: 'IT Infrastructure',
    subtitle: 'Scalable and secure enterprise networking and data solutions.',
    items: ['Data Center Setup', 'Network Infrastructure', 'Server & Storage', 'Cloud Integration', '+ More Solutions'],
    icon: Network,
  },
  {
    title: 'Automation & Smart Solutions',
    subtitle: 'Intelligent systems for building control and urban environments.',
    items: ['Building Automation', 'Smart City Solutions', 'IoT Implementation', 'Security & Surveillance'],
    icon: Zap,
  },
  {
    title: 'Security & Surveillance',
    subtitle: 'Comprehensive physical security and monitoring solutions.',
    items: ['IP CCTV Systems', 'Biometric Access', 'Perimeter Security'],
    icon: Camera,
  },
  {
    title: 'Construction & Infrastructure',
    subtitle: 'End-to-end civil, electrical, and interior solutions.',
    items: ['Civil Construction', 'Electrical & MEP', 'Interior Fit-out', 'Project Management'],
    icon: Building2,
  },
  {
    title: 'Food & Catering Services',
    subtitle: 'Professional hospitality and canteen management solutions.',
    items: ['Canteen Management', 'Corporate Cafeteria', 'Bulk Catering', 'Food Supply Chain'],
    icon: UtensilsCrossed,
  },
  {
    title: 'CSR & Social Projects',
    subtitle: 'Meaningful initiatives for community and environmental impact.',
    items: ['CSR Planning', 'Community Programs', 'Edu/Health Tech', 'Environmental Projects'],
    icon: Heart,
  },
  {
    title: 'Bulk Supply & Procurement',
    subtitle: 'Efficient sourcing for enterprise equipment and materials.',
    items: ['IT Equipment Bulk', 'Office Furniture', 'Electrical Items', 'Construction Materials'],
    icon: Package,
  },
  {
    title: 'Consulting & Support',
    subtitle: 'Technical expertise and round-the-clock infrastructure support.',
    items: ['Technical Consulting', 'Vendor Management', '24/7 Support', 'AMC/Maintenance'],
    icon: Headphones,
  },
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card content */}
      <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 group-hover:border-accent-blue/30 transition-all h-full backdrop-blur-sm">
        {/* Icon container with gradient */}
        <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all group-hover:scale-110">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: index * 0.2 }}
          >
            <Icon className="w-7 h-7 text-accent-blue group-hover:text-blue-600 transition-colors" />
          </motion.div>
        </div>

        <h3 className="text-xl font-bold text-accent-dark mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">{service.subtitle}</p>

        <ul className="space-y-3">
          {service.items.map((item, idx) => (
            <motion.li 
              key={idx} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start text-gray-600 text-sm group-hover:text-accent-dark transition-colors"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: idx * 0.2 }}
                className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-accent-blue to-blue-400 mt-1.5 mr-3 flex-shrink-0"
              ></motion.span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-blue/5 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative mt-8 py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-accent-dark to-accent-blue mb-6">
            Comprehensive Enterprise Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            From IT infrastructure to construction, catering, and consulting – we deliver end-to-end solutions tailored to your enterprise needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
