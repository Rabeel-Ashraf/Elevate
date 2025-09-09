import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Tips & Tricks Channel', href: 'https://whatsapp.com/channel/0029VazrkAC7oQhlRJdkBH3e' },
    { name: 'Cybersecurity Channel', href: 'https://whatsapp.com/channel/0029Vb67HbM1XquadAXGPn3n' },
    { name: 'WhatsApp Group', href: 'https://chat.whatsapp.com/FufXJ619MAIArsedDmWJdE?mode=ac_t' },
    { name: 'Blog', href: 'https://elevatexbyzaidexz.blogspot.com/?m=1' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ElevateX By Zaid (ExZ)
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering individuals with cutting-edge skills in Shopify, Amazon Dropshipping, 
              Cybersecurity, and Business Growth. Learn. Grow. Elevate.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for your success</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Connect With Us</h4>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 ElevateX By Zaid (ExZ). All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="mailto:elevatexbyzaid@gmail.com" className="hover:text-white transition-colors duration-300">
                elevatexbyzaid@gmail.com
              </a>
              <span>|</span>
              <a href="tel:+923006568236" className="hover:text-white transition-colors duration-300">
                +92 300 6568236
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
