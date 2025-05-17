import React, { useState, useEffect } from 'react';

const facts = [
  "🌱 Consistency is the secret to mastering anything. Just a few minutes a day makes a difference.",
  "💡 Spaced repetition helps your brain remember more, for longer.",
  "🎯 Focus on understanding, not just memorizing. True learning is meaningful.",
  "✨ Every review strengthens your memory—keep going!",
  "🧠 Your brain loves patterns. Revisiting cards at intervals builds strong connections.",
  "🌸 Progress is progress, no matter how small. Celebrate each step.",
  "📚 Active recall (testing yourself) is proven to boost retention.",
  "🌈 Learning is a journey—enjoy the process and be kind to yourself.",
  "🔄 Reviewing just before you forget is the most effective way to remember.",
  "🚀 Small, regular study sessions beat cramming every time.",
  "🌤️ Mistakes are part of learning. Each one is a step forward.",
  "🌻 Take breaks! Rest helps your brain consolidate new knowledge.",
  "🦋 The more senses you use, the better you remember. Read, write, and say it out loud.",
  "🌟 You’re building a smarter, stronger mind—one card at a time.",
  "🍀 Stay curious. Every question you answer grows your knowledge."
];

const BonusFeature: React.FC = () => {
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % facts.length);
    }, 30000); // 30 secs
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bonus-feature">
      <p>{facts[factIndex]}</p>
    </div>
  );
};

export default BonusFeature;