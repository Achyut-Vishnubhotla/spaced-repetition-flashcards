import React from 'react';

interface ReviewStatsProps {
  reviewed: number;
  success: number;
}

const ReviewStats: React.FC<ReviewStatsProps> = ({ reviewed, success }) => {
  const rate = reviewed === 0 ? 0 : Math.round((success / reviewed) * 100);
  return (
    <div className="review-stats">
      <h2>Review Stats</h2>
      <p>Cards reviewed: <b>{reviewed}</b></p>
      <p>Success rate: <b>{rate}%</b></p>
    </div>
  );
};

export default ReviewStats;