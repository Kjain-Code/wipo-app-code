'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';

export function FinalCTA() {
  return (
    <>
      {/* Loan Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full bg-emerald-50">
                    Loan Benefits
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Become Eligible For
                  <br />
                  <span className="text-emerald-700">₹1 Lakh - ₹15 Lakh Loan</span>
                </h2>
                <p className="text-foreground/60 mb-8 leading-relaxed text-sm">
                  After completing 6 months with active investments and account verification, users become eligible for instant loan approvals ranging from ₹1 lakh to ₹15 lakh.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Fast Approval', 'Low Interest', 'Secure Process'].map((tag) => (
                    <div key={tag} className="flex items-center gap-2 px-4 py-2 border border-emerald-200 rounded-full text-sm text-emerald-700 font-medium bg-emerald-50">
                      <CheckCircle2 className="w-4 h-4" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Card */}
              <div className="bg-emerald-50/50 p-10 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl border-2 border-emerald-300 p-8 text-center w-full max-w-xs shadow-lg"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🪙</span>
                  </div>
                  <p className="text-5xl font-bold text-emerald-700 mb-2">₹15L</p>
                  <p className="text-emerald-600 font-semibold mb-4">Maximum Loan Eligibility</p>
                  <div className="w-full bg-emerald-100 rounded-full h-2 mb-3">
                    <motion.div
                      className="bg-emerald-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p className="text-xs text-foreground/50">Eligibility after 6 months active investment</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-300/15 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-300/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <motion.div
            className="glass-green p-12 sm:p-16 rounded-3xl text-center relative z-10 border border-emerald-300/50 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              Ready to Build Your{' '}
              <span className="gradient-text">Future?</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
              Download the WIPO App and access smarter property investment opportunities today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://https://github.com/Kjain-Code/wipo-code/releases/download/v1.0.0/app-release.apk"
                download
                className="glow-button px-10 py-4 rounded-xl font-bold text-lg text-white flex items-center gap-3 shadow-lg group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.4 }}
                />
                <Download className="w-6 h-6 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.a>

              <motion.a
                href="#"
                className="px-10 py-4 rounded-xl font-bold text-lg text-emerald-700 border-2 border-emerald-400 hover:border-emerald-600 transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}