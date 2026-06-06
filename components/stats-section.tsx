'use client';

import { motion } from 'framer-motion';
import { Users, Home, Clock, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  { icon: Users, label: '10K+', text: 'Investors', value: 10000 },
  { icon: Home, label: '500+', text: 'Deals', value: 500 },
  { icon: Clock, label: '24/7', text: 'Support', value: 24 },
  { icon: Shield, label: '100%', text: 'Secure', value: 100 },
];

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}K</span>;
}

export function StatsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-emerald-600 font-semibold text-sm mb-3 px-4 py-2 bg-emerald-50 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            GROWTH METRICS
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Trusted by Investors Worldwide
          </h2>
          <p className="text-lg text-foreground/70">
            Join thousands of successful property investors on WIPO Group
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  className="glass-green p-8 rounded-2xl text-center group hover:border-emerald-400 transition-all duration-300 h-full relative overflow-hidden shadow-md hover:shadow-lg"
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background gradient on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-emerald-50/0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="mb-4 inline-block"
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="p-3 bg-gradient-to-br from-emerald-200/50 to-green-100/50 rounded-xl">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                    </motion.div>

                    {/* Number */}
                    <motion.div
                      className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-3"
                      whileInView={{ scale: 1 }}
                      initial={{ scale: 0.5 }}
                      transition={{ duration: 0.6 }}
                    >
                      {stat.label === '10K+' ? (
                        <>
                          <CountUp target={10} />+
                        </>
                      ) : stat.label === '500+' ? (
                        <>
                          <CountUp target={5} duration={2} />00+
                        </>
                      ) : (
                        stat.label
                      )}
                    </motion.div>

                    {/* Label */}
                    <p className="text-base font-semibold text-emerald-900 mb-2">
                      {stat.text}
                    </p>

                    {/* Decorative line */}
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-emerald-300/0 via-emerald-500 to-emerald-300/0 rounded-full mt-4"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
