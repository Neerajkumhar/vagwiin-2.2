import React from 'react';
import { motion } from 'framer-motion';
import { Network, Phone, Video, Server, Database, ShieldAlert, Flame, MonitorPlay, Cpu } from 'lucide-react';

const detailedServices = [
  {
    title: 'Structured Cabling System',
    description: 'High-performance structured cabling systems for reliable data transmission and network infrastructure. We ensure pristine cable management and certified connectivity for future-proof bandwidth.',
    icon: Network,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Unified Communication System',
    description: 'Integrate voice, video, and data communication channels to streamline collaboration. Connect your teams across the globe with encrypted, low-latency, and high-fidelity enterprise SIP solutions.',
    icon: Phone,
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop'
  },
  {
    title: 'Telepresence & Collaboration',
    description: 'Immersive video conferencing and telepresence solutions for seamless remote team collaboration. We design acoustic and visually optimized conference rooms for top-tier executives.',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?q=80&w=2069&auto=format&fit=crop'
  },
  {
    title: 'Enterprise Network',
    description: 'Scalable and secure enterprise networking solutions including high-throughput routing, switching, and dense wireless (Wi-Fi 6E) environments tailored for large campuses.',
    icon: Server,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Server & Storage',
    description: 'Robust server and data storage solutions engineered for performance, reliability, and security. Featuring all-flash SANs, hyper-converged infrastructure (HCI), and redundant failovers.',
    icon: Database,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop'
  },
  {
    title: 'Security & Surveillance',
    description: 'Comprehensive IP CCTV, biometric access control, perimeter intrusion, and physical security solutions for enterprise protection. View feeds dynamically from a centralized SOC.',
    icon: ShieldAlert,
    image: 'https://aegistechnologies.com/wp-content/uploads/2019/04/security-surveillance-1024x683.jpg'
  },
  {
    title: 'Fire & Safety System',
    description: 'Advanced fire detection, suppression, and safety alarm systems to ensure complete workplace hazard protection according strictly to international safety compliances.',
    icon: Flame,
    image: 'https://resources.impactfireservices.com/hubfs/Blog%20Images/Blog_why-invest-in-advanced-fire-protection-systems.jpg'
  },
  {
    title: 'Audio Visual System',
    description: 'State-of-the-art AV solutions for auditoriums, meeting rooms, digital signage, and public address systems. We integrate the finest visual displays and acoustic soundscapes.',
    icon: MonitorPlay,
    image: 'https://utglobal.com/wp-content/uploads/2020/02/av.jpg'
  },
  {
    title: 'Building Automation System',
    description: 'Intelligent building management systems for energy efficiency and operational control. Command lighting, HVAC, and power resources through a centralized AI-driven dashboard.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our premium IT hardware capabilities. We integrate state-of-the-art physical infrastructure with intelligent digital control to empower your enterprise.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Detailed List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
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
                  {[
                    `Professional ${service.title.split(' ')[0]} Installation`,
                    'Enterprise Grade Hardware Integration',
                    '24/7 Priority Support & Maintenance'
                  ].map((feature, i) => (
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your infrastructure?</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Partner with Vagwiin to harness seamless technology scaling, top-tier security, and state-of-the-art physical networking.
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
