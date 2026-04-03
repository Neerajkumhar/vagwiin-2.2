import React from 'react';
import { motion } from 'framer-motion';
import {
  Network,
  Phone,
  Video,
  Server,
  Database,
  ShieldAlert,
  Flame,
  MonitorPlay,
  Cpu
} from 'lucide-react';

const servicesData = [
  {
    title: 'Structured Cabling System',
    description: 'High-performance structured cabling systems for reliable data transmission and network infrastructure.',
    icon: Network,
  },
  {
    title: 'Unified Communication System',
    description: 'Integrate voice, video, and data communication channels to streamline collaboration.',
    icon: Phone,
  },
  {
    title: 'Telepresence & Collaboration',
    description: 'Immersive video conferencing and telepresence solutions for seamless remote team collaboration.',
    icon: Video,
  },
  {
    title: 'Enterprise Network',
    description: 'Scalable and secure enterprise networking solutions including routing, switching, and wireless.',
    icon: Server,
  },
  {
    title: 'Server & Storage',
    description: 'Robust server and data storage solutions engineered for performance, reliability, and security.',
    icon: Database,
  },
  {
    title: 'Security & Surveillance',
    description: 'Comprehensive CCTV, access control, and physical security solutions for enterprise protection.',
    icon: ShieldAlert,
  },
  {
    title: 'Fire & Safety System',
    description: 'Advanced fire detection and safety alarm systems to ensure complete workplace hazard protection.',
    icon: Flame,
  },
  {
    title: 'Audio Visual System',
    description: 'State-of-the-art AV solutions for auditoriums, meeting rooms, and public address systems.',
    icon: MonitorPlay,
  },
  {
    title: 'Building Automation System',
    description: 'Intelligent building management systems for energy efficiency and operational control.',
    icon: Cpu,
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
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
    >
      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-blue transition-colors">
        <Icon className="w-7 h-7 text-accent-blue group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-accent-dark mb-3">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent-blue tracking-wider uppercase mb-3">Our Services</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-dark mb-6">
            Comprehensive IT Infrastructure Solutions
          </h3>
          <p className="text-base sm:text-lg text-gray-600">
            We deliver end-to-end hardware and integration services designed to optimize your business operations and secure your digital assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
