export interface Flashcard {
    id: string;
    question: string;
    answer: string;
    category?: string;
    lastReviewed: Date;
    nextReview: Date;
    interval: number;
    repetitions: number;
}

export interface ReviewStats {
    totalReviewed: number;
    correctAnswers: number;
    incorrectAnswers: number;
    accuracy: number;
}

export interface Theme {
    name: string;
    backgroundColor: string;
    textColor: string;
    buttonColor: string;
}

export interface UserSettings {
    preferredTheme: Theme;
    notificationsEnabled: boolean;
}