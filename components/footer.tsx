'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <footer className="border-t border-emerald-200 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              <span className="gradient-text">WIPO</span> Group
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Smart property investment and real estate opportunities for the modern investor.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Features', 'How It Works', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-foreground/70 hover:text-emerald-600 transition-colors text-sm font-medium"
                    whileHover={{ x: 3 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-foreground/70 hover:text-emerald-600 transition-colors text-sm font-medium"
                    whileHover={{ x: 3 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:support@wipogroup.com"
                className="flex items-center gap-2 text-foreground/70 hover:text-emerald-600 transition-colors text-sm group font-medium"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>support@wipogroup.com</span>
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-foreground/70 hover:text-emerald-600 transition-colors text-sm group font-medium"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (234) 567-890</span>
              </motion.a>
              <motion.div
                className="flex items-start gap-2 text-foreground/70 text-sm font-medium"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 Investment Ave, Finance City, FC 12345</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-emerald-200" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center py-8 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-foreground/70 font-medium">
            © 2024 WIPO Group. All rights reserved.
          </p>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Linkedin, href: '#' },
              { icon: Twitter, href: '#' },
            ].map(({ icon: Icon }, index) => (
              <motion.a
                key={index}
                href="#"
                className="p-2 glass-green rounded-lg hover:border-emerald-400 transition-all hover:bg-emerald-100/30"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 text-emerald-600 hover:text-emerald-700 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
