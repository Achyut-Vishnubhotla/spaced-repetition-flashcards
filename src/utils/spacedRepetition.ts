export const calculateNextReviewDate = (lastReviewed: Date, interval: number): Date => {
    const nextReviewDate = new Date(lastReviewed);
    nextReviewDate.setDate(lastReviewed.getDate() + interval);
    return nextReviewDate;
};

export const getReviewInterval = (easeFactor: number, repetitions: number): number => {
    if (repetitions === 0) return 1; // First review
    return Math.ceil(easeFactor * Math.pow(2, repetitions - 1));
};

export const updateFlashcard = (flashcard: any, correct: boolean): any => {
    const newRepetitions = correct ? flashcard.repetitions + 1 : 0;
    const newEaseFactor = correct ? Math.min(flashcard.easeFactor + 0.1, 2.5) : Math.max(flashcard.easeFactor - 0.1, 1.3);
    const newInterval = getReviewInterval(newEaseFactor, newRepetitions);
    const nextReviewDate = calculateNextReviewDate(new Date(), newInterval);

    return {
        ...flashcard,
        repetitions: newRepetitions,
        easeFactor: newEaseFactor,
        nextReviewDate,
    };
};