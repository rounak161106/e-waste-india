import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const questions = [
  {
    q: "How much e-waste did the world generate in 2022?",
    options: ["32 million tonnes", "62 million tonnes", "12 million tonnes", "82 million tonnes"],
    correct: 1,
    explanation: "The UN Global E-Waste Monitor 2024 confirmed 62 million tonnes — up 82% since 2010.",
  },
  {
    q: "India is the world's ___ largest e-waste producer.",
    options: ["1st", "2nd", "3rd", "5th"],
    correct: 2,
    explanation: "India ranks 3rd after China and USA, generating 6.19 million MT in 2024.",
  },
  {
    q: "What percentage of India's e-waste is handled informally?",
    options: ["40%", "60%", "75%", "90%"],
    correct: 3,
    explanation: "90% of India's e-waste is handled by unprotected informal workers — with no PPE or safety.",
  },
  {
    q: "How much gold is in 1 tonne of circuit boards vs. gold ore?",
    options: ["Same amount", "2× more", "10× more", "50× more"],
    correct: 3,
    explanation: "Circuit boards contain 250g of gold per tonne vs. 5g in gold ore. E-waste is a buried treasure.",
  },
  {
    q: "Which country/region has the highest e-waste recycling rate?",
    options: ["USA", "Japan", "Germany", "Europe overall"],
    correct: 3,
    explanation: "Europe as a region achieves 42.8% — the highest globally. Germany and Norway lead within Europe.",
  },
];

const QuizSection = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === questions[current].correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  const getResult = () => {
    if (score <= 2) return { msg: "Time to learn more! Explore this page.", color: "text-ewaste-orange" };
    if (score <= 4) return { msg: "Good knowledge! Share what you know.", color: "text-blue-400" };
    return { msg: "E-waste expert! Help spread awareness.", color: "text-ewaste-green" };
  };

  const q = questions[current];

  return (
    <section id="quiz" className="py-20 sm:py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label mb-3">TEST YOUR KNOWLEDGE</p>
          <h2 className="section-headline text-3xl sm:text-4xl md:text-5xl">How Much Do You Know About E-Waste?</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {!finished ? (
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Progress */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs text-ewaste-muted">Question {current + 1} of {questions.length}</span>
                    <span className="text-xs text-ewaste-green font-semibold">Score: {score}/{questions.length}</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/5 mb-6">
                    <div
                      className="h-full rounded-full bg-ewaste-green transition-all duration-500"
                      style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                    />
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl mb-6">{q.q}</h3>

                  <div className="space-y-3">
                    {q.options.map((opt, idx) => {
                      let classes = "glass-card p-4 cursor-pointer transition-all duration-200 border text-left w-full";
                      if (!answered) {
                        classes += " border-white/10 hover:border-ewaste-green/40 hover:bg-white/[0.03]";
                      } else if (idx === q.correct) {
                        classes += " border-ewaste-green/60 bg-ewaste-green/10";
                      } else if (idx === selected) {
                        classes += " border-red-500/60 bg-red-500/10";
                      } else {
                        classes += " border-white/5 opacity-50";
                      }

                      return (
                        <button key={idx} onClick={() => handleSelect(idx)} className={classes} disabled={answered}>
                          <span className="text-sm font-medium">
                            <span className="text-ewaste-muted mr-2">{String.fromCharCode(65 + idx)})</span>
                            {opt}
                          </span>
                          {answered && idx === q.correct && (
                            <span className="text-ewaste-green text-xs ml-2">✓</span>
                          )}
                          {answered && idx === selected && idx !== q.correct && (
                            <span className="text-red-400 text-xs ml-2">✗</span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {answered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6"
                    >
                      <div className="glass-card p-4 border-l-2 border-ewaste-green/40 mb-4">
                        <p className="text-sm text-ewaste-muted">{q.explanation}</p>
                      </div>
                      <button onClick={handleNext} className="btn-primary-green text-sm px-6 py-3">
                        {current < questions.length - 1 ? "Next Question →" : "See Results"}
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <span className="text-5xl">{score === 5 ? "🏆" : score >= 3 ? "👏" : "📚"}</span>
                  <p className="font-heading font-bold text-3xl sm:text-4xl mt-4">
                    {score}/{questions.length}
                  </p>
                  <p className={`text-lg font-semibold mt-2 ${getResult().color}`}>{getResult().msg}</p>
                  <button onClick={handleRestart} className="btn-primary-green text-sm px-6 py-3 mt-6">
                    Try Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default QuizSection;
