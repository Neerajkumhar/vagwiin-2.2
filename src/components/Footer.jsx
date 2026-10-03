import React from 'react';
import { Globe, MessageCircle, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const SOCIAL_LINKS = [
  { Icon: Globe, href: 'https://vagwiin.com', label: 'Visit the Vagwiin website' },
  { Icon: MessageCircle, href: 'https://wa.me/919461991604', label: 'Chat with us on WhatsApp' },
];

const Footer = () => {
  return (
    <footer className="bg-accent-dark pt-20 pb-10 border-t border-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8">
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
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent-blue hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
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
                'IT Infrastructure',
                'Automation & Smart Solutions',
                'Security & Surveillance',
                'Construction & Infrastructure',
                'Food & Catering Services',
                'CSR & Social Projects',
                'Bulk Supply & Procurement',
                'Consulting & Support'
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
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 text-sm text-gray-500">
          <p>
            Designed &amp; Developed by{' '}
            <a
              href="https://visuark.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent-blue transition-colors font-medium"
            >
              Visuark
            </a>
          </p>
          <p className="flex items-center gap-1.5">
            Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" aria-hidden="true" />{' '}
            by{' '}
            <a
              href="https://visuark.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent-blue transition-colors font-medium"
            >
              Visuark
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
