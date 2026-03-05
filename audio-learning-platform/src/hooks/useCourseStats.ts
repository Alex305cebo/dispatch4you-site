'use client';

import { useState, useEffect } from 'react';
import { lessons } from '@/src/data/courseData';
import { COURSE_CONTENT } from '@/src/data/content';

interface CourseStats {
    totalLessons: number;
    completedLessons: number;
    inProgressLessons: number;
    overallProgress: number;
    lastLesson: {
        id: string;
        title: string;
        category: string;
        progress: number;
        slug: string;
        moduleSlug: string;
    } | null;
    moduleProgress: Record<string, {
        completed: number;
        total: number;
        percentage: number;
    }>;
    totalTimeListened: number;
}

export function useCourseStats(): CourseStats {
    const [stats, setStats] = useState<CourseStats>({
        totalLessons: 0,
        completedLessons: 0,
        inProgressLessons: 0,
        overallProgress: 0,
        lastLesson: null,
        moduleProgress: {},
        totalTimeListened: 0
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        try {
            const progressData = localStorage.getItem('audio-learning-progress');
            const progress = progressData ? JSON.parse(progressData) : {};

            // Calculate stats from courseData
            const allLessons = COURSE_CONTENT.flatMap(module =>
                module.lessons.map(lesson => ({
                    ...lesson,
                    moduleSlug: module.slug,
                    category: module.title
                }))
            );

            let completed = 0;
            let inProgress = 0;
            let lastPlayedLesson: any = null;
            let lastPlayedTime = 0;
            let totalTime = 0;

            allLessons.forEach(lesson => {
                const lessonProgress = progress[lesson.id];
                if (lessonProgress) {
                    totalTime += lessonProgress.currentTime || 0;

                    if (lessonProgress.completed) {
                        completed++;
                    } else if (lessonProgress.currentTime > 0) {
                        inProgress++;
                    }

                    // Find last played lesson
                    const playedTime = new Date(lessonProgress.lastPlayed).getTime();
                    if (playedTime > lastPlayedTime) {
                        lastPlayedTime = playedTime;
                        lastPlayedLesson = {
                            id: lesson.id,
                            title: lesson.title,
                            category: lesson.category,
                            progress: lessonProgress.duration > 0
                                ? (lessonProgress.currentTime / lessonProgress.duration) * 100
                                : 0,
                            slug: lesson.slug,
                            moduleSlug: lesson.moduleSlug
                        };
                    }
                }
            });

            // Calculate module progress
            const moduleProgress: Record<string, any> = {};
            COURSE_CONTENT.forEach(module => {
                const moduleLessons = module.lessons;
                const completedInModule = moduleLessons.filter(lesson =>
                    progress[lesson.id]?.completed
                ).length;

                moduleProgress[module.id] = {
                    completed: completedInModule,
                    total: moduleLessons.length,
                    percentage: moduleLessons.length > 0
                        ? (completedInModule / moduleLessons.length) * 100
                        : 0
                };
            });

            const overallProgress = allLessons.length > 0
                ? (completed / allLessons.length) * 100
                : 0;

            setStats({
                totalLessons: allLessons.length,
                completedLessons: completed,
                inProgressLessons: inProgress,
                overallProgress,
                lastLesson: lastPlayedLesson,
                moduleProgress,
                totalTimeListened: totalTime
            });
        } catch (error) {
            console.error('Error loading course stats:', error);
        }
    }, []);

    return stats;
}
