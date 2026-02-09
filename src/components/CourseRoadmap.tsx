import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Move, Volume2, Repeat, Database, Zap, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { chapters } from '@/data/courses';

const iconMap: Record<string, any> = {
  Rocket, Move, Volume2, Repeat, Database, Zap, Trophy,
};

const colorMap: Record<string, string> = {
  'scratch-orange': 'bg-scratch-orange',
  'scratch-blue': 'bg-scratch-blue',
  'scratch-green': 'bg-scratch-green',
  'scratch-yellow': 'bg-scratch-yellow',
  'scratch-red': 'bg-scratch-red',
  'scratch-purple': 'bg-scratch-purple',
  'scratch-cyan': 'bg-scratch-cyan',
};

const CourseRoadmap = () => {
  const { t, language } = useLanguage();

  return (
    <section className="bg-gradient-fun py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            {t('roadmap.title')}
          </h2>
          <p className="text-muted-foreground">{t('roadmap.subtitle')}</p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-1/2" />

          {chapters.map((chapter, i) => {
            const Icon = iconMap[chapter.icon] || Rocket;
            const bgColor = colorMap[chapter.color] || 'bg-primary';

            return (
              <motion.div
                key={chapter.id}
                className={`relative mb-8 flex items-start gap-4 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {/* Icon bubble */}
                <div className="z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${bgColor} text-white shadow-lg ring-4 ring-background`}>
                    <Icon size={22} />
                  </div>
                </div>

                {/* Card */}
                <Link
                  to="/course"
                  className={`flex-1 rounded-2xl border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 ${
                    i % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'
                  }`}
                >
                  <h3 className="font-display text-base font-bold text-foreground">
                    {chapter.title[language]}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {chapter.description[language]}
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary">
                    {chapter.lessons.length} {t('course.lessons')}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseRoadmap;
