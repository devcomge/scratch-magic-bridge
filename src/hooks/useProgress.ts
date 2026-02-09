import { useState, useCallback } from 'react';
import { getTotalLessons } from '@/data/courses';

interface Progress {
  completedLessons: string[];
  quizScores: Record<string, number>;
}

const STORAGE_KEY = 'scratch-academy-progress';

const loadProgress = (): Progress => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return { completedLessons: [], quizScores: {} };
};

const saveProgress = (progress: Progress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress>(loadProgress);

  const completeLesson = useCallback((lessonId: string) => {
    setProgress((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      const updated = {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
      };
      saveProgress(updated);
      return updated;
    });
  }, []);

  const saveQuizScore = useCallback((lessonId: string, score: number) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        quizScores: { ...prev.quizScores, [lessonId]: score },
      };
      saveProgress(updated);
      return updated;
    });
  }, []);

  const isLessonCompleted = useCallback(
    (lessonId: string) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  );

  const getChapterProgress = useCallback(
    (lessonIds: string[]) => {
      const completed = lessonIds.filter((id) =>
        progress.completedLessons.includes(id)
      ).length;
      return lessonIds.length > 0 ? Math.round((completed / lessonIds.length) * 100) : 0;
    },
    [progress.completedLessons]
  );

  const getOverallProgress = useCallback(() => {
    const total = getTotalLessons();
    return total > 0 ? Math.round((progress.completedLessons.length / total) * 100) : 0;
  }, [progress.completedLessons]);

  const resetProgress = useCallback(() => {
    const empty: Progress = { completedLessons: [], quizScores: {} };
    setProgress(empty);
    saveProgress(empty);
  }, []);

  return {
    progress,
    completeLesson,
    saveQuizScore,
    isLessonCompleted,
    getChapterProgress,
    getOverallProgress,
    resetProgress,
  };
};
