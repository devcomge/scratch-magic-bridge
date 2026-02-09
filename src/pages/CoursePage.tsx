import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Move, Volume2, Repeat, Database, Zap, Trophy, CheckCircle2, Clock, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { chapters } from '@/data/courses';
import Layout from '@/components/Layout';
import Mascot from '@/components/Mascot';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

const CoursePage = () => {
  const { t, language } = useLanguage();
  const { isLessonCompleted, getChapterProgress, getOverallProgress } = useProgress();
  const overallProgress = getOverallProgress();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <Mascot size="md" />
          <div className="flex-1">
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              {t('course.title')}
            </h1>
            <p className="text-muted-foreground">{t('course.subtitle')}</p>
          </div>
        </div>

        {/* Overall Progress */}
        <Card className="mb-10 border-2 border-primary/20">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex-1">
              <p className="mb-2 text-sm font-semibold text-foreground">{t('course.progress')}</p>
              <Progress value={overallProgress} className="h-3" />
            </div>
            <span className="font-display text-2xl font-bold text-primary">{overallProgress}%</span>
          </CardContent>
        </Card>

        {/* Chapters */}
        <div className="space-y-8">
          {chapters.map((chapter, chapterIdx) => {
            const Icon = iconMap[chapter.icon] || Rocket;
            const bgColor = colorMap[chapter.color] || 'bg-primary';
            const chapterProgress = getChapterProgress(chapter.lessons.map((l) => l.id));

            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: chapterIdx * 0.08 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${bgColor} text-white shadow-md`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-display text-xl">
                          {chapter.id}. {chapter.title[language]}
                        </CardTitle>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {chapter.description[language]}
                        </p>
                      </div>
                      {chapterProgress > 0 && (
                        <span className="rounded-full bg-scratch-green/10 px-3 py-1 text-sm font-bold text-scratch-green">
                          {chapterProgress}%
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {chapter.lessons.map((lesson) => {
                        const completed = isLessonCompleted(lesson.id);
                        const hasContent = lesson.content.length > 0;

                        return (
                          <Link
                            key={lesson.id}
                            to={`/lesson/${lesson.id}`}
                            className={cn(
                              'flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-muted',
                              completed && 'bg-scratch-green/5'
                            )}
                          >
                            {completed ? (
                              <CheckCircle2 size={20} className="flex-shrink-0 text-scratch-green" />
                            ) : (
                              <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-border" />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className={cn(
                                'text-sm font-semibold truncate',
                                completed ? 'text-scratch-green' : 'text-foreground'
                              )}>
                                {lesson.title[language]}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {lesson.description[language]}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock size={12} />
                                {lesson.duration} {t('common.minutes')}
                              </span>
                              {!hasContent && (
                                <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                                  Soon
                                </span>
                              )}
                              <ChevronRight size={16} className="text-muted-foreground" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default CoursePage;
