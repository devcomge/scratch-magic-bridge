import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Code2, Palette, Users, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import Mascot from '@/components/Mascot';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const { t } = useLanguage();

  const sections = [
    {
      icon: Code2,
      color: 'bg-scratch-blue',
      title: t('about.whatIsScratch'),
      content: t('about.scratchDesc'),
    },
    {
      icon: Users,
      color: 'bg-scratch-green',
      title: t('about.whoIsThisFor'),
      content: t('about.forDesc'),
    },
    {
      icon: Lightbulb,
      color: 'bg-scratch-purple',
      title: t('about.whyLearn'),
      content: t('about.whyDesc'),
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            {t('about.title')}
          </h1>
          <p className="text-lg text-muted-foreground">{t('about.subtitle')}</p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <CardContent className="flex gap-4 p-6">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${section.color} text-white`}>
                    <section.icon size={24} />
                  </div>
                  <div>
                    <h2 className="mb-2 font-display text-xl font-bold text-foreground">
                      {section.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {section.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            className="pt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Mascot
              message={t('about.getStarted')}
              size="md"
              className="mb-6"
            />
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/course">
                <Button size="lg" className="rounded-full gap-2 font-bold">
                  {t('hero.cta')}
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <a href="https://scratch.mit.edu" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full gap-2">
                  {t('footer.scratchLink')}
                  <ExternalLink size={18} />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
