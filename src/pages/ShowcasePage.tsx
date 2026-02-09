import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { showcaseProjects } from '@/data/courses';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const difficultyColors: Record<string, string> = {
  beginner: 'bg-scratch-green/10 text-scratch-green border-scratch-green/20',
  intermediate: 'bg-scratch-yellow/10 text-scratch-yellow border-scratch-yellow/20',
  advanced: 'bg-scratch-red/10 text-scratch-red border-scratch-red/20',
};

const ShowcasePage = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            {t('showcase.title')}
          </h1>
          <p className="text-lg text-muted-foreground">{t('showcase.subtitle')}</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {showcaseProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary/20 transition-colors">
                {/* Scratch Embed */}
                <div className="border-b">
                  <iframe
                    src={`https://scratch.mit.edu/projects/${project.scratchProjectId}/embed`}
                    allowTransparency
                    width="100%"
                    height="340"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    className="w-full"
                  />
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="font-display text-lg">
                      {project.title[language]}
                    </CardTitle>
                    <Badge variant="outline" className={difficultyColors[project.difficulty]}>
                      {t(`showcase.${project.difficulty}`)}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {project.category[language]}
                  </p>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description[language]}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={`https://scratch.mit.edu/projects/${project.scratchProjectId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="rounded-full gap-1.5">
                        {t('showcase.tryIt')}
                        <ExternalLink size={14} />
                      </Button>
                    </a>
                    <a
                      href={`https://scratch.mit.edu/projects/${project.scratchProjectId}/#editor`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="rounded-full gap-1.5">
                        {t('showcase.remix')}
                        <Star size={14} />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ShowcasePage;
