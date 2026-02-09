import { motion } from 'framer-motion';
import { BookOpen, Brain, Gamepad2, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTotalLessons } from '@/data/courses';

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: BookOpen, value: `${getTotalLessons()}+`, label: t('stats.lessons'), color: 'text-scratch-blue' },
    { icon: Brain, value: '10+', label: t('stats.quizzes'), color: 'text-scratch-purple' },
    { icon: Gamepad2, value: '5+', label: t('stats.projects'), color: 'text-scratch-green' },
    { icon: Globe, value: '2', label: t('stats.languages'), color: 'text-scratch-orange' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <stat.icon size={32} className={`mb-2 ${stat.color}`} />
              <span className="font-display text-3xl font-bold text-foreground md:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
