import React from 'react';
import Flashcard from './components/Flashcard';
import ReviewStats from './components/ReviewStats';
import BonusFeature from './components/BonusFeature';
import ThemeSwitcher from './components/UI/ThemeSwitcher';
import './styles/main.css';

const flashcards = [
  {
    question: "What is spaced repetition?",
    answer: "A learning technique that incorporates increasing intervals of time between subsequent review of previously learned material."
  },
  {
    question: "Who invented spaced repetition?",
    answer: "Spaced repetition was first described by psychologist Hermann Ebbinghaus."
  },
  {
    question: "Why is spaced repetition effective?",
    answer: "It helps combat the forgetting curve by reviewing information just before it is likely to be forgotten."
  },
  {
    question: "What is the forgetting curve?",
    answer: "A theory that shows how information is lost over time when there is no attempt to retain it."
  },
  {
    question: "What is active recall?",
    answer: "A study technique that involves actively stimulating memory during the learning process."
  },
  {
    question: "Which app popularized spaced repetition for language learning?",
    answer: "Anki is a popular app that uses spaced repetition for language learning."
  },
  {
    question: "What is a flashcard?",
    answer: "A card bearing information on both sides, used for revision and memorization."
  },
  {
    question: "How does spaced repetition help long-term memory?",
    answer: "It strengthens neural connections by reviewing information at optimal intervals."
  },
  {
    question: "What is the Leitner system?",
    answer: "A method of using flashcards where cards are reviewed at increasing intervals based on correctness."
  },
  {
    question: "What is interval scheduling in spaced repetition?",
    answer: "It is the process of determining the optimal time to review information for maximum retention."
  },
  {
    question: "What is the main benefit of spaced repetition?",
    answer: "It improves retention and recall by combating the effects of forgetting."
  },
  {
    question: "Can spaced repetition be used for subjects other than languages?",
    answer: "Yes, it can be used for any subject that requires memorization, such as medicine, law, or history."
  },
  {
    question: "What is the minimum number of reviews needed for spaced repetition to be effective?",
    answer: "At least three to five reviews are generally needed for effective long-term retention."
  },
  {
    question: "What is the difference between cramming and spaced repetition?",
    answer: "Cramming involves massed practice in a short time, while spaced repetition spreads reviews over time."
  },
  {
    question: "What is the optimal interval for reviewing new information?",
    answer: "The optimal interval increases each time you successfully recall the information."
  },
  {
    question: "What is a common mistake when using spaced repetition?",
    answer: "Not reviewing cards at the scheduled intervals, which reduces the effectiveness of the method."
  },
  {
    question: "How can you make flashcards more effective?",
    answer: "Use simple questions, images, and active recall rather than copying large blocks of text."
  }
];

const App: React.FC = () => {
  const [reviewed, setReviewed] = React.useState(0);
  const [success, setSuccess] = React.useState(0);
  const [current, setCurrent] = React.useState(0);

  const handleReview = (correct: boolean) => {
    setReviewed((r) => r + 1);
    if (correct) setSuccess((s) => s + 1);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % flashcards.length);
    }, 500);
  };

  return (
    <div className="app-container">
      <ThemeSwitcher />
      <h1 className="app-title">Spaced Repetition Flashcards</h1>
      <Flashcard
        question={flashcards[current].question}
        answer={flashcards[current].answer}
        onReview={handleReview}
      />
      <ReviewStats reviewed={reviewed} success={success} />
      <BonusFeature />
    </div>
  );
};

export default App;