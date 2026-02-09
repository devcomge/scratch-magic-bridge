import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Target, Lightbulb, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { getLessonById, getChapterByLessonId, getAdjacentLessons } from '@/data/courses';
import Layout from '@/components/Layout';
import QuizComponent from '@/components/QuizComponent';
import Mascot from '@/components/Mascot';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { t, language } = useLanguage();
  const { isLessonCompleted, completeLesson, saveQuizScore } = useProgress();

  const lesson = lessonId ? getLessonById(lessonId) : null;
  const chapter = lessonId ? getChapterByLessonId(lessonId) : null;
  const { prev, next } = lessonId ? getAdjacentLessons(lessonId) : { prev: null, next: null };
  const completed = lessonId ? isLessonCompleted(lessonId) : false;

  if (!lesson || !chapter) {
    return (
      <Layout>
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20">
          <Mascot message={language === 'en' ? 'Oops! Lesson not found.' : 'უპს! გაკვეთილი ვერ მოიძებნა.'} size="lg" />
          <Link to="/course" className="mt-6">
            <Button variant="outline" className="rounded-full">
              {t('lesson.backToCourse')}
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const hasContent = lesson.content.length > 0;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 md:py-10">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/course">{t('nav.lessons')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/course">{chapter.title[language]}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{lesson.title[language]}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto max-w-3xl"
        >
          {/* Lesson Header */}
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock size={14} />
              {lesson.duration} {t('common.minutes')}
              {completed && (
                <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-scratch-green/10 px-2 py-0.5 text-xs font-bold text-scratch-green">
                  <CheckCircle2 size={12} /> {t('course.completed')}
                </span>
              )}
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              {lesson.title[language]}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">{lesson.description[language]}</p>
          </div>

          {/* Objectives */}
          {lesson.objectives.length > 0 && (
            <Card className="mb-8 border-2 border-secondary/20">
              <CardContent className="p-5">
                <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-foreground">
                  <Target size={20} className="text-secondary" />
                  {t('lesson.objectives')}
                </h3>
                <ul className="space-y-2">
                  {lesson.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                        {i + 1}
                      </span>
                      {obj[language]}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Content */}
          {hasContent ? (
            <div className="space-y-6">
              {lesson.content.map((block, i) => {
                switch (block.type) {
                  case 'heading':
                    return (
                      <h2 key={i} className="font-display text-2xl font-bold text-foreground">
                        {block.content[language]}
                      </h2>
                    );
                  case 'text':
                    return (
                      <div key={i} className="prose prose-sm max-w-none text-foreground">
                        {block.content[language].split('\n').map((paragraph, pi) => (
                          <p key={pi} className="mb-2 whitespace-pre-line leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    );
                  case 'tip':
                    return (
                      <Card key={i} className="border-l-4 border-l-scratch-yellow bg-scratch-yellow/5">
                        <CardContent className="flex items-start gap-3 p-4">
                          <Lightbulb size={20} className="mt-0.5 flex-shrink-0 text-scratch-yellow" />
                          <p className="text-sm text-foreground">{block.content[language]}</p>
                        </CardContent>
                      </Card>
                    );
                  case 'challenge':
                    return (
                      <Card key={i} className="border-l-4 border-l-scratch-purple bg-scratch-purple/5">
                        <CardContent className="p-4">
                          <h4 className="mb-2 font-display text-base font-bold text-foreground">
                            {t('lesson.challenge')}
                          </h4>
                          <p className="text-sm text-foreground whitespace-pre-line">{block.content[language]}</p>
                        </CardContent>
                      </Card>
                    );
                  case 'scratch-embed':
                    return (
                      <div key={i} className="space-y-2">
                        <p className="text-sm text-muted-foreground">{block.content[language]}</p>
                        <div className="overflow-hidden rounded-2xl border shadow-sm">
                          <iframe
                            src={`https://scratch.mit.edu/projects/${block.scratchProjectId}/embed`}
                            allowTransparency
                            width="100%"
                            height="402"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen
                            className="w-full"
                          />
                        </div>
                        <a
                          href={`https://scratch.mit.edu/projects/${block.scratchProjectId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline"
                        >
                          {t('lesson.tryInScratch')}
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center py-16 text-center">
              <Mascot
                message={t('course.comingSoon')}
                size="lg"
              />
            </div>
          )}

          {/* Quiz */}
          {lesson.quiz.length > 0 && (
            <div className="mt-12">
              <QuizComponent
                questions={lesson.quiz}
                onComplete={(score) => {
                  saveQuizScore(lesson.id, score);
                }}
              />
            </div>
          )}

          {/* Mark Complete */}
          {hasContent && (
            <div className="mt-8 flex justify-center">
              <Button
                onClick={() => completeLesson(lesson.id)}
                disabled={completed}
                size="lg"
                className={cn(
                  'rounded-full px-8 font-bold',
                  completed && 'bg-scratch-green hover:bg-scratch-green'
                )}
              >
                {completed ? t('lesson.alreadyComplete') : t('lesson.markComplete')}
              </Button>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            {prev ? (
              <Link to={`/lesson/${prev.id}`}>
                <Button variant="outline" className="rounded-full gap-2">
                  <ArrowLeft size={16} />
                  <span className="hidden sm:inline">{prev.title[language]}</span>
                  <span className="sm:hidden">{t('lesson.prevLesson')}</span>
                </Button>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link to={`/lesson/${next.id}`}>
                <Button className="rounded-full gap-2">
                  <span className="hidden sm:inline">{next.title[language]}</span>
                  <span className="sm:hidden">{t('lesson.nextLesson')}</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            ) : (
              <Link to="/course">
                <Button variant="outline" className="rounded-full gap-2">
                  {t('lesson.backToCourse')}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default LessonPage;
