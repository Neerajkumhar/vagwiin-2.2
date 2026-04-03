import React from 'react';
import { Share2, Globe, MessageCircle, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent-dark pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1 rounded-lg bg-white/10 flex items-center justify-center">
                <img src="/favicon.ico" alt="Vagwiin Logo" className="h-8 w-8" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Vagwiin</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering global enterprises with smart, scalable, and secure IT infrastructure hardware solutions.
            </p>
            <div className="flex items-center gap-4">
              {[Share2, Globe, MessageCircle].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent-blue hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-accent-blue transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Core Services</h4>
            <ul className="space-y-4">
              {[
                'Structured Cabling',
                'Enterprise Networks',
                'Server & Storage',
                'Security & Surveillance',
                'AV Systems'
              ].map((service, i) => (
                <li key={i}>
                  <a href="/services" className="text-gray-400 hover:text-accent-blue transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest updates on enterprise IT trends and hardware innovations.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent-blue transition-colors"
              />
              <button className="w-full bg-accent-blue text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Vagwiin. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
