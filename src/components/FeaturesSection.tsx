import { motion } from 'framer-motion';
import { BookOpen, Brain, Gamepad2, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  { icon: BookOpen, color: 'bg-scratch-blue', titleKey: 'features.interactive', descKey: 'features.interactiveDesc' },
  { icon: Brain, color: 'bg-scratch-purple', titleKey: 'features.quizzes', descKey: 'features.quizzesDesc' },
  { icon: Gamepad2, color: 'bg-scratch-green', titleKey: 'features.projects', descKey: 'features.projectsDesc' },
  { icon: Globe, color: 'bg-scratch-orange', titleKey: 'features.bilingual', descKey: 'features.bilingualDesc' },
];

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            {t('features.title')}
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full border-2 border-transparent transition-all duration-200 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} text-white shadow-md`}>
                    <feature.icon size={28} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(feature.descKey)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
