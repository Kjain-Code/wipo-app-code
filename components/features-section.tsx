'use client';

import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, Zap, DollarSign, Home, Gem, BarChart2, Flame } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Property Buy',
    description: 'Verified properties with secure and transparent deals.',
    gradient: 'from-emerald-500/20 to-emerald-600/20',
    color: 'text-emerald-600',
  },
  {
    icon: TrendingUp,
    title: 'Property Sell',
    description: 'Sell properties faster with high-visibility listings.',
    gradient: 'from-green-500/20 to-green-600/20',
    color: 'text-green-600',
  },
  {
    icon: Users,
    title: 'Investment Committees',
    description: 'Join investment groups and grow together.',
    gradient: 'from-teal-500/20 to-teal-600/20',
    color: 'text-teal-600',
  },
  {
    icon: Zap,
    title: 'Smart Growth',
    description: 'Track opportunities and manage investments easily.',
    gradient: 'from-emerald-400/20 to-emerald-500/20',
    color: 'text-emerald-700',
  },
];

const investments = [
  {
    title: 'Property Buy & Sell',
    description: 'Invest in premium residential and commercial properties with high appreciation potential.',
    roi: '25% - 50% ROI',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    icon: Home,
    iconBg: 'bg-emerald-500',
  },
  {
    title: 'Gold Investment',
    description: 'Secure your future with digital and physical gold investment opportunities.',
    roi: '20% Yearly ROI',
    image: 'https://images.unsplash.com/photo-1615551043360-33de8b5f410c?q=80&w=1200&auto=format&fit=crop',
    icon: Gem,
    iconBg: 'bg-yellow-500',
  },
  {
    title: 'Stock Market',
    description: 'Grow your wealth through diversified stock investments and smart strategies.',
    roi: '20% Yearly ROI',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
    icon: BarChart2,
    iconBg: 'bg-blue-500',
  },
  {
    title: 'Coal Investment',
    description: 'Invest in coal and industrial sectors with stable long-term growth opportunities.',
    roi: '20% Yearly ROI',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop',
    icon: Flame,
    iconBg: 'bg-gray-600',
  },
];

export function FeaturesSection() {
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white via-emerald-50/40 to-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-emerald-600 font-semibold text-sm mb-3 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            PREMIUM FEATURES
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Advanced Investment Tools
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to make smarter property investment decisions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="glass-green p-8 h-full hover:border-emerald-300 transition-all duration-300 overflow-hidden relative shadow-md hover:shadow-xl rounded-2xl">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className="mb-6 inline-block"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                    >
                      <div className={`p-3 bg-gradient-to-br ${feature.gradient} rounded-xl`}>
                        <Icon className={`w-8 h-8 ${feature.color}`} />
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-foreground/70 text-base leading-relaxed">{feature.description}</p>
                    <motion.div className="mt-6 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500/0 rounded-full w-0 group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function InvestmentSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-emerald-50/30">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-100/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-emerald-600 font-semibold text-sm mb-3 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
            INVESTMENT OPPORTUNITIES
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Invest Smart
            <br />
            <span className="gradient-text">Build Your Future</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Buy, sell, and invest in multiple high-return sectors with trusted investment plans and guaranteed growth opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {investments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100"
              >
                {/* Image with icon overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Icon badge — rotates on hover */}
                  <motion.div
                    className={`absolute top-4 left-4 ${item.iconBg} p-3 rounded-2xl shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-foreground/60 mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                      <DollarSign className="w-4 h-4" />
                      {item.roi}
                    </div>
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="text-emerald-600 font-semibold text-sm flex items-center gap-1 hover:text-emerald-800 transition-colors"
                    >
                      Explore More →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}