import React from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, Camera, Building2, UtensilsCrossed, Heart, Package, Headphones } from 'lucide-react';

const detailedServices = [
  {
    title: 'IT Infrastructure',
    description: 'Scalable and secure enterprise networking and data solutions designed to support your growing business needs. We provide comprehensive data center setup, robust network infrastructure, high-performance server and storage solutions, seamless cloud integration, and extensive support for all your IT infrastructure requirements.',
    icon: Network,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
    features: ['Data Center Setup', 'Network Infrastructure', 'Server & Storage Configuration', 'Cloud Integration']
  },
  {
    title: 'Automation & Smart Solutions',
    description: 'Intelligent systems for building control and urban environments that streamline operations and enhance efficiency. Our solutions include smart building automation, cutting-edge IoT implementations, smart city infrastructure, and comprehensive surveillance systems tailored to modern enterprise needs.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    features: ['Building Automation', 'Smart City Solutions', 'IoT Implementation', 'Intelligent Control Systems']
  },
  {
    title: 'Security & Surveillance',
    description: 'Comprehensive physical security and monitoring solutions to protect your assets and ensure organizational safety. We deploy advanced IP CCTV systems, biometric access controls, perimeter security solutions, and 24/7 surveillance capabilities managed from centralized security operations centers.',
    icon: Camera,
    image: '/security.jpg',
    features: ['IP CCTV Systems', 'Biometric Access Control', 'Perimeter Security', '24/7 Monitoring']
  },
  {
    title: 'Construction & Infrastructure',
    description: 'End-to-end civil, electrical, and interior solutions for enterprise projects. From initial civil construction and electrical & MEP implementations to sophisticated interior fit-outs and comprehensive project management, we handle every aspect of your infrastructure development with precision and expertise.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    features: ['Civil Construction', 'Electrical & MEP', 'Interior Fit-out', 'Project Management']
  },
  {
    title: 'Food & Catering Services',
    description: 'Professional hospitality and canteen management solutions for corporate environments. We provide complete canteen management, corporate cafeteria operations, bulk catering services, and efficient food supply chain management to keep your workforce nourished and productive.',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=2070&auto=format&fit=crop',
    features: ['Canteen Management', 'Corporate Cafeteria Operations', 'Bulk Catering', 'Supply Chain Management']
  },
  {
    title: 'CSR & Social Projects',
    description: 'Meaningful initiatives focused on community and environmental impact. We partner with enterprises to create lasting social value through strategic CSR planning, community development programs, educational and health technology initiatives, and environmentally sustainable projects.',
    icon: Heart,
    image: '/csr.jpg',
    features: ['CSR Planning & Strategy', 'Community Programs', 'Edu/Health Tech Solutions', 'Environmental Projects']
  },
  {
    title: 'Bulk Supply & Procurement',
    description: 'Efficient sourcing and procurement solutions for enterprise equipment and materials at scale. We streamline the procurement process for IT equipment, office furniture, electrical items, construction materials, and more – delivering quality products with cost optimization.',
    icon: Package,
    image: '/supply.jpg',
    features: ['IT Equipment Sourcing', 'Office Furniture', 'Electrical Items', 'Construction Materials']
  },
  {
    title: 'Consulting & Support',
    description: 'Technical expertise and round-the-clock infrastructure support to keep your operations running smoothly. Our consulting team provides strategic technical guidance, vendor management, 24/7 dedicated support, and comprehensive Annual Maintenance Contracts (AMC) for peace of mind.',
    icon: Headphones,
    image: '/consulting.jpg',
    features: ['Technical Consulting', 'Vendor Management', '24/7 Support', 'AMC/Maintenance Services']
  }
];

const ServicesPage = () => {
  return (
    <main className="pt-24 min-h-screen bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-accent-dark py-24 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-500/10 blur-3xl rounded-full" />
        </div>
        <div className="text-center max-w-3xl mx-auto leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive enterprise solutions spanning IT infrastructure, construction, automation, catering, and more. We integrate expertise across diverse sectors to empower your business.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Detailed List */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {detailedServices.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-accent-blue/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                {/* Decorative element */}
                <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-24 h-24 bg-[radial-gradient(#CBD5E1_2px,transparent_2px)] [background-size:12px_12px] -z-10`} />
              </motion.div>

              {/* Text Section */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 lg:px-8"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                  <Icon className="w-8 h-8 text-accent-blue" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-accent-dark mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-accent-dark font-medium">
                      <div className="w-2 h-2 rounded-full bg-accent-blue" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="inline-flex items-center text-accent-blue font-bold text-lg hover:text-blue-800 transition-colors group"
                >
                  Consult an Expert
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-accent-blue to-blue-800 py-20 mt-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your enterprise?</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Partner with Vagwiin for comprehensive solutions across IT infrastructure, construction, automation, catering, and consulting. Let us handle your business transformation.
          </p>
          <a
            href="/contact"
            className="inline-flex justify-center items-center bg-white text-accent-blue px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Get a Personalized Quote
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
