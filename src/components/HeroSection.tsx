import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Mascot from './Mascot';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
      {/* Animated background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-8 -top-8 h-40 w-40 animate-float rounded-full bg-scratch-orange/15" />
        <div
          className="absolute right-12 top-20 h-28 w-28 animate-float rounded-full bg-scratch-blue/15"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-12 left-1/4 h-36 w-36 animate-float rounded-full bg-scratch-purple/15"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute -bottom-4 right-1/3 h-20 w-20 animate-float rounded-full bg-scratch-green/15"
          style={{ animationDelay: '0.5s' }}
        />
        <div
          className="absolute left-1/2 top-8 h-16 w-16 animate-float rounded-full bg-scratch-yellow/20"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <Sparkles size={16} />
              Scratch Programming
            </div>

            <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>

            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              {t('hero.subtitle')}
            </p>

            <Link to="/course">
              <Button size="lg" className="rounded-full px-8 text-base font-bold shadow-lg hover:shadow-xl transition-shadow">
                {t('hero.cta')}
                <ArrowRight size={18} className="ml-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Mascot */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Mascot
              message={t('hero.greeting')}
              size="lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
