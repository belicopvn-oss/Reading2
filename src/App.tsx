import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  CheckCircle2, 
  RotateCcw, 
  Lightbulb, 
  ChevronRight, 
  ChevronLeft, 
  Menu, 
  X,
  GraduationCap,
  Sun,
  Moon,
  ChevronDown,
  Trophy,
  Sparkles,
  Eye
} from 'lucide-react';
import { EXAM_DATA, Part, Exercise, Question } from './data';

const Layout = ({ children, currentPart, onPartChange, progress, isDark, setIsDark }: { 
  children: React.ReactNode, 
  currentPart: number, 
  onPartChange: (id: number) => void,
  progress: number,
  isDark: boolean,
  setIsDark: (val: boolean) => void
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-page-bg text-text-primary font-sans flex flex-col antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b px-4 py-3 flex items-center justify-between transition-all duration-300 bg-page-bg/80 border-border-base backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg shadow-purple-500/20">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold tracking-tight hidden sm:block font-display text-text-primary">
            Luyện Đọc <span className="text-purple-600">Tiếng Anh</span>
          </h1>
        </div>
        
        <div className="flex-1 max-w-md mx-8 hidden md:block">
          <div className="flex items-center justify-between mb-1.5 px-1">
            <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Tiến độ hoàn thành</p>
            <p className="text-[10px] text-purple-600 dark:text-purple-400 font-bold">{Math.round(progress)}%</p>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden bg-border-base">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-xl transition-all duration-300 bg-card-bg text-text-secondary border border-border-base hover:border-purple-400 hover:text-purple-600 hover:scale-105 active:scale-95 shadow-sm"
          >
            {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
          </button>

          <nav className="hidden lg:flex items-center gap-1 bg-border-base/50 p-1 rounded-xl">
            {EXAM_DATA.map((part) => (
              <button
                key={part.id}
                onClick={() => onPartChange(part.id)}
                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                  currentPart === part.id 
                    ? 'bg-card-bg text-purple-600 shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Phần {part.id}
              </button>
            ))}
          </nav>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl transition-all hover:bg-border-base text-text-primary"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-40 pt-20 px-6 bg-page-bg"
          >
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-6">Điều hướng</h2>
              {EXAM_DATA.map((part) => (
                <button
                  key={part.id}
                  onClick={() => {
                    onPartChange(part.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left p-4 rounded-2xl text-lg font-bold flex items-center justify-between transition-all ${
                    currentPart === part.id 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20' 
                      : 'bg-card-bg text-text-primary border border-border-base'
                  }`}
                >
                  <span>Phần {part.id}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 max-w-5xl w-full mx-auto p-6 md:p-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t py-12 px-4 text-center transition-colors bg-page-bg border-border-base">
        <div className="flex items-center justify-center gap-2 mb-4">
          <GraduationCap className="text-purple-600 w-5 h-5" />
          <span className="font-display font-bold text-text-secondary uppercase tracking-widest text-xs">Luyện Đọc Tiếng Anh</span>
        </div>
        <p className="text-text-secondary text-sm font-medium italic">Tác giả: Thanh Tài</p>
        <p className="text-text-disabled text-[10px] mt-4 uppercase tracking-[0.2em]">© 2026 Nền tảng Giáo dục Cao cấp</p>
      </footer>
    </div>
  );
};

const ExerciseCard: React.FC<{ exercise: Exercise, onComplete: (id: string, score: number) => void }> = ({ exercise, onComplete }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  const handleInputChange = (qId: number, value: string) => {
    if (showResults || revealedAnswers[qId]) return;
    setUserAnswers(prev => ({ ...prev, [qId]: value }));
  };

  const checkResults = () => {
    setShowResults(true);
    const score = exercise.questions.reduce((acc, q) => {
      const userAns = userAnswers[q.id]?.trim().toLowerCase();
      const correctAns = q.answer.toLowerCase();
      const possibleAnswers = correctAns.split('/').map(a => a.trim());
      return acc + (possibleAnswers.includes(userAns) ? 1 : 0);
    }, 0);
    onComplete(exercise.id, score);
  };

  const reset = () => {
    setUserAnswers({});
    setShowResults(false);
    setShowHints({});
    setRevealedAnswers({});
    setShowAllAnswers(false);
  };

  const toggleHint = (qId: number) => {
    if (exercise.type === 'part5') {
      if (!showHints[qId]) {
        setShowHints(prev => ({ ...prev, [qId]: true }));
        revealAnswer(qId);
      } else {
        setShowHints(prev => ({ ...prev, [qId]: false }));
      }
    } else {
      setShowHints(prev => ({ ...prev, [qId]: !prev[qId] }));
    }
  };

  const revealAnswer = (qId: number) => {
    setRevealedAnswers(prev => ({ ...prev, [qId]: true }));
    const q = exercise.questions.find(q => q.id === qId);
    if (q) {
      setUserAnswers(prev => ({ ...prev, [qId]: q.answer }));
    }
  };

  const toggleAllHints = () => {
    const newState = !showAllAnswers;
    setShowAllAnswers(newState);
    
    const newHints = { ...showHints };
    const newRevealed = { ...revealedAnswers };
    const newUserAnswers = { ...userAnswers };

    exercise.questions.forEach(q => {
      newHints[q.id] = newState;
      if (newState) {
        newRevealed[q.id] = true;
        newUserAnswers[q.id] = q.answer;
      }
    });

    setShowHints(newHints);
    setRevealedAnswers(newRevealed);
    setUserAnswers(newUserAnswers);
  };

  const renderPassageWithGaps = () => {
    if (!exercise.passage) return null;
    
    const parts = exercise.passage.split(/({{gap:\d+}})/);
    return parts.map((part, index) => {
      const match = part.match(/{{gap:(\d+)}}/);
      if (match) {
        const qId = parseInt(match[1]);
        const q = exercise.questions.find(q => q.id === qId);
        if (!q) return part;

        if (exercise.type === 'part1') {
          return (
            <span key={index} className="inline-block mx-1 relative group align-middle">
              <select
                disabled={showResults}
                value={userAnswers[qId] || ''}
                onChange={(e) => handleInputChange(qId, e.target.value)}
                className={`appearance-none px-3 py-1.5 rounded-xl border text-sm font-bold cursor-pointer transition-all pr-8 min-w-[140px] shadow-sm ${
                  showResults
                    ? (userAnswers[qId] === q.answer 
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                        : 'border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400')
                    : 'border-border-base bg-page-bg text-text-primary hover:border-purple-400 focus:border-focus-purple focus:ring-4 focus:ring-focus-purple/10 outline-none'
                }`}
              >
                <option value="" disabled>Chọn...</option>
                {q.options?.map((opt, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  return (
                    <option key={letter} value={letter}>
                      {letter}. {opt}
                    </option>
                  );
                })}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              {showResults && userAnswers[qId] !== q.answer && (
                <span className="absolute -top-7 left-0 bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm z-10">
                  {q.answer}
                </span>
              )}
              {!showResults && showAllAnswers && (
                <span className="absolute -bottom-7 left-0 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-bold border border-amber-200 dark:border-amber-800/50 shadow-sm z-10 whitespace-nowrap">
                  {q.hint || q.answer}
                </span>
              )}
            </span>
          );
        } else {
          return (
            <span key={index} className="inline-block mx-1 relative align-middle">
              <input
                type="text"
                disabled={showResults}
                value={userAnswers[qId] || ''}
                onChange={(e) => handleInputChange(qId, e.target.value)}
                className={`w-28 px-3 py-1.5 rounded-xl border text-sm font-bold text-center transition-all shadow-sm ${
                  showResults
                    ? (userAnswers[qId]?.trim().toLowerCase().split('/').map(a => a.trim()).includes(q.answer.toLowerCase())
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                        : 'border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400')
                    : 'border-border-base bg-page-bg text-text-primary hover:border-purple-400 focus:border-focus-purple focus:ring-4 focus:ring-focus-purple/10 outline-none'
                }`}
                placeholder="..."
              />
              {showResults && !userAnswers[qId]?.trim().toLowerCase().split('/').map(a => a.trim()).includes(q.answer.toLowerCase()) && (
                <span className="absolute -top-7 left-0 bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm z-10">
                  {q.answer}
                </span>
              )}
              {!showResults && showAllAnswers && (
                <span className="absolute -bottom-7 left-0 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-bold border border-amber-200 dark:border-amber-800/50 shadow-sm z-10 whitespace-nowrap">
                  {q.hint || q.answer}
                </span>
              )}
            </span>
          );
        }
      }
      return part;
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-card-bg rounded-2xl border border-border-base shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden mb-12 transition-all duration-300"
    >
      <div className="bg-gradient-to-r from-purple-600/5 to-blue-600/5 px-8 py-6 border-b border-border-base flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-card-bg rounded-xl flex items-center justify-center shadow-sm border border-border-base">
            <BookOpen className="text-purple-600 w-5 h-5" />
          </div>
          <h3 className="text-text-primary font-bold text-xl font-display">{exercise.title}</h3>
        </div>
        <div className="flex items-center gap-3">
          {exercise.type === 'part5' && (
            <button
              onClick={toggleAllHints}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-border-base rounded-xl text-xs font-bold text-purple-600 hover:border-purple-400 transition-all shadow-sm"
            >
              <Eye className="w-4 h-4" />
              {showAllAnswers ? 'Ẩn tất cả đáp án' : 'Hiện tất cả đáp án'}
            </button>
          )}
          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-widest border border-purple-200 dark:border-purple-800/50">
            {exercise.type}
          </span>
        </div>
      </div>

      <div className="p-8 md:p-10">
        {exercise.passage && (
          <div className="mb-10 bg-page-bg p-8 rounded-3xl border border-border-base leading-[1.8] text-text-primary whitespace-pre-wrap text-[1.1rem] font-medium">
            {renderPassageWithGaps()}
          </div>
        )}

        {!['part1', 'part2', 'part3'].includes(exercise.type) && (
          <div className="space-y-8">
            {exercise.questions.map((q) => {
              return (
                <div key={q.id} className="group p-8 rounded-3xl border border-border-base bg-page-bg/50 hover:bg-card-bg transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-card-bg shadow-sm border border-border-base flex items-center justify-center text-sm font-bold text-purple-600 dark:text-purple-400">
                          {q.id}
                        </div>
                        {q.text && <p className="text-text-primary font-bold text-lg leading-snug">{q.text}</p>}
                      </div>
                      {q.hint && (
                        <button 
                          onClick={() => toggleHint(q.id)}
                          className={`p-2.5 rounded-xl transition-all duration-200 ${
                            showHints[q.id] 
                              ? 'bg-hint-bg text-hint-text' 
                              : 'text-text-disabled hover:text-purple-600 hover:bg-purple-50'
                          }`}
                        >
                          <Lightbulb className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    {q.options && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {q.options.map((opt, idx) => {
                          const letter = String.fromCharCode(65 + idx);
                          const isSelected = userAnswers[q.id] === letter;
                          const isCorrect = q.answer === letter;
                          const showCorrect = showResults && isCorrect;
                          const showWrong = showResults && isSelected && !isCorrect;

                          return (
                            <button
                              key={idx}
                              disabled={showResults}
                              onClick={() => handleInputChange(q.id, letter)}
                              className={`text-left px-6 py-4 rounded-2xl border-2 text-sm font-bold transition-all duration-300 flex items-center gap-5 ${
                                isSelected 
                                  ? 'border-purple-600 bg-purple-50/50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-100' 
                                  : 'border-border-base bg-card-bg hover:border-purple-200 text-text-secondary'
                              } ${showCorrect ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-100' : ''} ${
                                showWrong ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-100' : ''
                              } hover:scale-[1.02] active:scale-[0.98]`}
                            >
                              <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                                isSelected ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' : 'bg-border-base text-text-secondary'
                              } ${showCorrect ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : ''} ${showWrong ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30' : ''}`}>
                                {letter}
                              </span>
                              <span className="flex-1">{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {exercise.type === 'part5' && !q.options && (
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-wrap gap-3">
                          {['A', 'B', 'C', 'D', 'E'].map((letter) => {
                            const isSelected = userAnswers[q.id] === letter;
                            const isCorrect = q.answer === letter;
                            const isRevealed = revealedAnswers[q.id];
                            const showCorrect = (showResults || isRevealed) && isCorrect;
                            const showWrong = showResults && isSelected && !isCorrect && !isRevealed;

                            return (
                              <button
                                key={letter}
                                disabled={showResults || isRevealed}
                                onClick={() => handleInputChange(q.id, letter)}
                                className={`w-14 h-14 rounded-2xl border-2 font-bold transition-all duration-300 flex items-center justify-center ${
                                  isSelected 
                                    ? 'border-purple-600 bg-purple-50/50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-100' 
                                    : 'border-border-base bg-card-bg hover:border-purple-200 text-text-secondary'
                                } ${showCorrect ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-100' : ''} ${
                                  showWrong ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-100' : ''
                                } hover:scale-110 active:scale-90`}
                              >
                                {letter}
                              </button>
                            );
                          })}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <button
                            onClick={() => toggleHint(q.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                              showHints[q.id]
                                ? 'bg-hint-bg text-hint-text border border-amber-200'
                                : 'bg-card-bg text-text-secondary border border-border-base hover:border-purple-400 hover:text-purple-600'
                            }`}
                          >
                            <Lightbulb className={`w-4 h-4 ${showHints[q.id] ? 'text-amber-500' : ''}`} />
                            {showHints[q.id] ? 'Ẩn gợi ý' : 'Xem gợi ý & Đáp án'}
                          </button>
                        </div>

                        <AnimatePresence>
                          {showHints[q.id] && q.hints && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-3">
                                {q.hints.map((hintText, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-4 bg-hint-bg border border-amber-100 dark:border-amber-900/30 rounded-2xl text-sm text-hint-text flex gap-4 shadow-sm"
                                  >
                                    <div className="flex-shrink-0 w-6 h-6 bg-white dark:bg-slate-800 rounded-full shadow-sm flex items-center justify-center text-[10px] font-black text-amber-600">
                                      {idx + 1}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      <p className="leading-relaxed font-medium">{hintText}</p>
                                    </div>
                                  </motion.div>
                                ))}
                                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-sm text-emerald-700 flex items-center gap-3 font-bold">
                                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                  Đáp án đúng: {q.answer}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                  <AnimatePresence>
                    {showHints[q.id] && q.hint && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 p-5 bg-hint-bg border border-amber-100 dark:border-amber-900/30 rounded-2xl text-sm text-hint-text flex gap-4 shadow-sm">
                          <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                            <Lightbulb className="w-4 h-4 text-amber-500" />
                          </div>
                          <p className="leading-relaxed font-medium">{q.hint}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-12 pt-10 border-t border-border-base flex flex-wrap gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={checkResults}
              disabled={showResults}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:from-purple-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <CheckCircle2 className="w-5 h-5" />
              Kiểm tra kết quả
            </button>
            {(exercise.type === 'part1' || exercise.type === 'part2' || exercise.type === 'part3') && (
              <button
                onClick={() => setShowAllAnswers(!showAllAnswers)}
                disabled={showResults}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
                  showAllAnswers 
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                    : 'bg-hint-bg text-hint-text border border-amber-200/50 hover:bg-amber-100'
                }`}
              >
                <Lightbulb className="w-5 h-5" />
                {showAllAnswers ? 'Ẩn gợi ý' : 'Hiện gợi ý'}
              </button>
            )}
            <button
              onClick={reset}
              className="flex items-center gap-3 px-8 py-4 bg-card-bg text-text-secondary border border-border-base rounded-xl font-bold hover:bg-page-bg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <RotateCcw className="w-5 h-5" />
              Làm lại
            </button>
          </div>

          {showResults && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-4 px-8 py-4 bg-page-bg rounded-2xl border border-border-base"
            >
              <div className="p-2 bg-card-bg rounded-xl shadow-sm border border-border-base">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold mb-0.5">Điểm số</p>
                <p className="text-xl font-black text-text-primary">
                  {exercise.questions.reduce((acc, q) => {
                    const userAns = userAnswers[q.id]?.trim().toLowerCase();
                    const correctAns = q.answer.toLowerCase();
                    const possibleAnswers = correctAns.split('/').map(a => a.trim());
                    return acc + (possibleAnswers.includes(userAns) ? 1 : 0);
                  }, 0)} <span className="text-text-disabled font-medium">/ {exercise.questions.length}</span>
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [currentPartId, setCurrentPartId] = useState(1);
  const [activeExerciseId, setActiveExerciseId] = useState<string | null>(null);
  const [completedExercises, setCompletedExercises] = useState<Record<string, number>>({});
  const [isDark, setIsDark] = useState(false);

  const currentPart = useMemo(() => EXAM_DATA.find(p => p.id === currentPartId)!, [currentPartId]);

  useEffect(() => {
    if (currentPart.exercises.length > 0) {
      setActiveExerciseId(currentPart.exercises[0].id);
    }
  }, [currentPartId, currentPart]);

  const totalExercises = useMemo(() => EXAM_DATA.reduce((acc, p) => acc + p.exercises.length, 0), []);
  const progress = useMemo(() => (Object.keys(completedExercises).length / totalExercises) * 100, [completedExercises, totalExercises]);

  const handleExerciseComplete = (id: string, score: number) => {
    setCompletedExercises(prev => ({ ...prev, [id]: score }));
  };

  const nextPart = () => {
    if (currentPartId < 5) setCurrentPartId(currentPartId + 1);
  };

  const prevPart = () => {
    if (currentPartId > 1) setCurrentPartId(currentPartId - 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPartId]);

  const activeExercise = useMemo(() => 
    currentPart.exercises.find(ex => ex.id === activeExerciseId),
    [currentPart, activeExerciseId]
  );

  // Scroll tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveExerciseId(entry.target.id.replace('exercise-', ''));
        }
      });
    }, observerOptions);

    currentPart.exercises.forEach((ex) => {
      const el = document.getElementById(`exercise-${ex.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPartId, currentPart.exercises]);

  const scrollToExercise = (id: string) => {
    const el = document.getElementById(`exercise-${id}`);
    if (el) {
      const offset = 140; // Header + Sticky Nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout 
      currentPart={currentPartId} 
      onPartChange={setCurrentPartId} 
      progress={progress}
      isDark={isDark}
      setIsDark={setIsDark}
    >
      <div className="mb-10 text-center sm:text-left">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-center sm:justify-start gap-3 mb-4"
        >
          <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-purple-200 dark:border-purple-800/50">
            Phần {currentPart.id}
          </span>
          <div className="h-px w-12 bg-border-base hidden sm:block" />
          <span className="text-text-secondary text-[10px] font-bold uppercase tracking-widest">Phần Đọc</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight font-display mb-8">
          {currentPart.title}
        </h2>
      </div>

      {/* Sticky Exercise Navigation */}
      <div className="sticky top-[65px] z-40 -mx-6 px-6 py-4 mb-10 bg-page-bg/95 backdrop-blur-md border-b border-border-base shadow-sm transition-all duration-300">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-white text-xs font-black">{currentPart.id}</span>
            </div>
            <span className="text-sm font-bold text-text-primary whitespace-nowrap">Phần {currentPart.id}</span>
          </div>
          
          <div className="h-4 w-px bg-border-base hidden sm:block" />

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 w-full">
            {currentPart.exercises.map((ex, idx) => {
              const isActive = activeExerciseId === ex.id;
              const isDone = !!completedExercises[ex.id];
              return (
                <button
                  key={ex.id}
                  onClick={() => scrollToExercise(ex.id)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 shrink-0 border ${
                    isActive
                      ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-card-bg border-border-base text-text-secondary hover:border-purple-400 hover:text-purple-600'
                  }`}
                >
                  <span>{currentPart.id}.{idx + 1}</span>
                  {isDone && (
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-emerald-500'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-20">
        {currentPart.exercises.map((ex) => (
          <div key={ex.id} id={`exercise-${ex.id}`} className="scroll-mt-40">
            <ExerciseCard 
              exercise={ex} 
              onComplete={handleExerciseComplete} 
            />
          </div>
        ))}
      </div>

      <div className="mt-20 flex items-center justify-between gap-6">
        <button
          onClick={prevPart}
          disabled={currentPartId === 1}
          className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-4 border-2 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 bg-card-bg border-border-base text-text-secondary hover:bg-page-bg hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Phần trước</span>
          <span className="sm:hidden">Trước</span>
        </button>
        
        <div className="hidden md:flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <div 
              key={num} 
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                currentPartId === num ? 'w-8 bg-purple-600' : 'bg-border-base'
              }`} 
            />
          ))}
        </div>

        <button
          onClick={nextPart}
          disabled={currentPartId === 5}
          className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:from-purple-500 hover:to-blue-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
        >
          <span className="hidden sm:inline">Phần tiếp theo</span>
          <span className="sm:hidden">Tiếp</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </Layout>
  );
}
