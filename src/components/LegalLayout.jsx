import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const LegalLayout = ({ title, subtitle, lastUpdated, sections }) => {
  return (
    <main className="pt-24 min-h-screen bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-accent-dark py-24 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/3 w-1/2 h-full bg-blue-500/10 blur-3xl rounded-full" />
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sections */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
              >
                <h2 className="text-2xl font-bold text-accent-dark mb-4 pb-3 border-b border-gray-200">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, j) => (
                    <p key={j} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.points && (
                    <ul className="space-y-2 list-disc list-inside marker:text-accent-blue">
                      {section.points.map((point, j) => (
                        <li key={j} className="text-gray-600 leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="pb-12">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            Last updated: <span className="font-semibold">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-50 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent-blue" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-accent-dark mb-2">Email</h3>
              <a
                href="mailto:support@vagwiin.com"
                className="text-gray-600 hover:text-accent-blue transition-colors"
              >
                support@vagwiin.com
              </a>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-50 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent-blue" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-accent-dark mb-2">Phone</h3>
              <a
                href="tel:+919461991604"
                className="text-gray-600 hover:text-accent-blue transition-colors"
              >
                +91 94619 91604
              </a>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-50 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent-blue" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-accent-dark mb-2">Registered Office</h3>
              <p className="text-gray-600">
                iStart Nest Center, Vikramaditya Nagar,<br />
                Surya Colony, Jodhpur, Rajasthan 342011
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visuark Credit */}
      <section className="py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            This policy is prepared and maintained by{' '}
            <a
              href="https://visuark.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-dark font-semibold hover:text-accent-blue transition-colors"
            >
              Visuark
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LegalLayout;
