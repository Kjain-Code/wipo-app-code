'use client';

import { motion } from 'framer-motion';
import { Download, UserPlus, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Download App',
    description: 'Get the WIPO app on your mobile device',
    icon: Download,
  },
  {
    number: '02',
    title: 'Create Account',
    description: 'Sign up with your details and verify your identity',
    icon: UserPlus,
  },
  {
    number: '03',
    title: 'Start Investing',
    description: 'Browse deals and begin your investment journey',
    icon: Zap,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-emerald-600 font-semibold text-sm mb-3 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            QUICK START
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Simple Setup Process
          </h2>
          <p className="text-lg text-foreground/70">Get started in 3 simple steps</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <motion.div
            className="hidden md:block absolute top-14 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-300"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="glass-green w-28 h-28 rounded-full flex items-center justify-center border border-emerald-300/40 group-hover:border-emerald-500 transition-all duration-300 shadow-lg relative overflow-hidden"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(16,185,129,0.15)',
                          '0 0 35px rgba(16,185,129,0.35)',
                          '0 0 20px rgba(16,185,129,0.15)',
                        ],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                    >
                      {/* Number — hides on hover */}
                      <motion.span
                        className="text-4xl font-bold text-emerald-600 absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-75"
                      >
                        {step.number}
                      </motion.span>

                      {/* Icon — shows on hover */}
                      <motion.div
                        className="absolute opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                      >
                        <Icon className="w-10 h-10 text-emerald-600" />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}