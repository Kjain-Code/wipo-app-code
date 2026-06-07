'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Download, MessageCircle, ArrowDown, Shield, TrendingUp, Users } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, setStarted };
}

function StatCard({ icon: Icon, value, suffix, label }: { icon: any, value: number, suffix: string, label: string }) {
  const { count, setStarted } = useCountUp(value);
  return (
    <motion.div
      className="glass-green px-6 py-4 rounded-2xl flex flex-col items-center gap-1 border border-emerald-300/30"
      whileHover={{ scale: 1.05, borderColor: 'rgba(16,185,129,0.6)' }}
      onViewportEnter={() => setStarted(true)}
    >
      <Icon className="w-5 h-5 text-emerald-500 mb-1" />
      <p className="text-2xl font-bold text-emerald-700">{count}{suffix}</p>
      <p className="text-xs text-emerald-600/70 font-medium text-center">{label}</p>
    </motion.div>
  );
}

export function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative overflow-hidden gradient-bg"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-300/20 rounded-full blur-3xl"
          animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-300/15 rounded-full blur-3xl"
          animate={{ y: [0, -60, 0], x: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-teal-200/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Extra floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-400/30"
            style={{
              top: `${15 + i * 14}%`,
              left: `${8 + i * 13}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      <motion.div
        style={{ y }}
        className="relative z-10 max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <motion.div
            className="glass-green px-6 py-3 rounded-full shadow-md border border-emerald-300/40"
            whileHover={{ scale: 1.05 }}
            animate={{ boxShadow: ['0 0 0px rgba(16,185,129,0)', '0 0 20px rgba(16,185,129,0.3)', '0 0 0px rgba(16,185,129,0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-sm font-semibold text-emerald-700">
              ✓ 10K+ Trusted Investors
            </p>
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight text-foreground"
        >
          <span className="block mb-3">Invest Smarter.</span>
          <span className="gradient-text text-5xl sm:text-6xl lg:text-7xl">Own Bigger.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-foreground/70 text-center mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          WIPO Group brings modern property investment and secure real estate
          opportunities together in one powerful platform.
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto"
        >
          {[
            'Secure Platform',
            'Fast Property Deals',
            'Trusted Investment Network',
          ].map((indicator, idx) => (
            <motion.div
              key={indicator}
              className="glass-green px-4 py-3 rounded-lg flex items-center gap-2 border border-emerald-300/40 hover:border-emerald-400/60 transition-all"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.08)' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <p className="text-sm font-medium text-emerald-900">{indicator}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 mb-10 max-w-xl mx-auto"
        >
          <StatCard icon={Users} value={10000} suffix="+" label="Trusted Investors" />
          <StatCard icon={TrendingUp} value={500} suffix="Cr+" label="Assets Managed" />
          <StatCard icon={Shield} value={99} suffix="%" label="Secure Transactions" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://github.com/Kjain-Code/wipo-code/releases/download/v1.0.0/app-release.apk"
            download
            className="glow-button px-8 py-4 rounded-xl font-bold text-lg text-white flex items-center gap-3 shadow-lg transition-all duration-300 group relative overflow-hidden"
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
            <span className="relative z-10">Download WIPO App</span>
          </motion.a>

          <motion.a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-green px-8 py-4 rounded-xl font-bold text-lg text-emerald-700 hover:border-emerald-400 transition-all duration-300 flex items-center gap-2 border border-emerald-300/40"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
            Contact Us
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-12"
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-emerald-500/60 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <p className="text-xs font-medium tracking-widest uppercase">Scroll to explore</p>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}