import React, { useState } from 'react';
import './Flashcard.css';

interface FlashcardProps {
  question: string;
  answer: string;
  onReview: (correct: boolean) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer, onReview }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Flip card when clicking anywhere except the buttons
  const handleFlip = () => setIsFlipped((f) => !f);

  const handleCorrect = (e: React.MouseEvent) => {
    e.stopPropagation();
    onReview(true);
    setIsFlipped(false);
  };

  const handleWrong = (e: React.MouseEvent) => {
    e.stopPropagation();
    onReview(false);
    setIsFlipped(false);
  };

  return (
    <div
      className={`flashcard-container${isFlipped ? ' flipped' : ''}`}
      tabIndex={0}
      onClick={handleFlip}
      style={{ userSelect: 'none' }}
    >
      <div className="flashcard-question">
        {isFlipped ? answer : question}
      </div>
      {isFlipped && (
        <div className="flashcard-actions">
          <button className="correct-btn" onClick={handleCorrect}>
            I was correct
          </button>
          <button className="wrong-btn" onClick={handleWrong}>
            I was wrong
          </button>
        </div>
      )}
      <div className="flashcard-answer">
        {isFlipped ? '' : '(Click anywhere to reveal answer)'}
      </div>
    </div>
  );
};

export default Flashcard;