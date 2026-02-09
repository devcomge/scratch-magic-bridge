import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, PartyPopper } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { QuizQuestion } from '@/data/courses';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface QuizComponentProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

const QuizComponent = ({ questions, onComplete }: QuizComponentProps) => {
  const { t, language } = useLanguage();
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQ];
  const isCorrect = selectedOption === question?.correctIndex;

  const handleCheck = () => {
    if (selectedOption === null) return;
    setShowResult(true);
    if (isCorrect) setCorrectCount((c) => c + 1);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      const score = Math.round(((correctCount + (isCorrect ? 0 : 0)) / questions.length) * 100);
      // Recalculate with the current answer included
      const finalCorrect = correctCount + (showResult && isCorrect ? 0 : 0);
      setFinished(true);
      onComplete(Math.round((correctCount / questions.length) * 100));
    }
  };

  const handleRetry = () => {
    setCurrentQ(0);
    setSelectedOption(null);
    setShowResult(false);
    setCorrectCount(0);
    setFinished(false);
  };

  if (finished) {
    const percentage = Math.round((correctCount / questions.length) * 100);
    const getMessage = () => {
      if (percentage === 100) return t('quiz.perfect');
      if (percentage >= 70) return t('quiz.great');
      return t('quiz.keepTrying');
    };

    return (
      <Card className="border-2 border-scratch-yellow/30 bg-card">
        <CardContent className="flex flex-col items-center py-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 10 }}
          >
            <PartyPopper size={64} className="mb-4 text-scratch-yellow" />
          </motion.div>
          <h3 className="mb-2 font-display text-2xl font-bold text-foreground">
            {getMessage()}
          </h3>
          <p className="mb-1 text-lg text-muted-foreground">
            {t('quiz.score')}: {correctCount}/{questions.length}
          </p>
          <p className="mb-6 text-3xl font-bold text-primary">{percentage}%</p>
          {percentage < 100 && (
            <Button onClick={handleRetry} variant="outline" className="rounded-full">
              {t('quiz.tryAgain')}
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between font-display">
          <span>{t('quiz.title')}</span>
          <span className="text-sm font-normal text-muted-foreground">
            {t('quiz.question')} {currentQ + 1} {t('quiz.of')} {questions.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-lg font-semibold text-foreground">
          {question.question[language]}
        </p>

        <div className="mb-6 space-y-3">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => !showResult && setSelectedOption(i)}
              disabled={showResult}
              className={cn(
                'w-full rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all',
                selectedOption === i && !showResult && 'border-primary bg-primary/5',
                showResult && i === question.correctIndex && 'border-scratch-green bg-scratch-green/10 text-foreground',
                showResult && selectedOption === i && i !== question.correctIndex && 'border-scratch-red bg-scratch-red/10',
                !showResult && selectedOption !== i && 'border-border hover:border-primary/30 hover:bg-muted',
                showResult && selectedOption !== i && i !== question.correctIndex && 'opacity-50'
              )}
            >
              <span className="flex items-center gap-2">
                {showResult && i === question.correctIndex && <CheckCircle2 size={18} className="text-scratch-green" />}
                {showResult && selectedOption === i && i !== question.correctIndex && <XCircle size={18} className="text-scratch-red" />}
                {option[language]}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 overflow-hidden"
            >
              <div className={cn(
                'rounded-xl p-4 text-sm',
                isCorrect ? 'bg-scratch-green/10 text-foreground' : 'bg-scratch-red/10 text-foreground'
              )}>
                <p className="mb-1 font-bold">
                  {isCorrect ? t('quiz.correct') : t('quiz.incorrect')}
                </p>
                <p>{question.explanation[language]}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-end">
          {!showResult ? (
            <Button
              onClick={handleCheck}
              disabled={selectedOption === null}
              className="rounded-full"
            >
              {t('quiz.checkAnswer')}
            </Button>
          ) : (
            <Button onClick={handleNext} className="rounded-full">
              {currentQ < questions.length - 1 ? t('quiz.nextQuestion') : t('quiz.finish')}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizComponent;
