/* eslint-disable */
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import './App.css'
/* eslint-enable */

// Components
import Header from './components/common/Header'
import Footer from './components/common/Footer'

// Pages
import HomePage from './pages/HomePage'

import PatternPage from './components/patterns/PatternPage'


// Hooks
import { useCompletedProblems } from './hooks/useLocalStorage'
import LeetCodePatterns from './pages/LeetcodePatterns'

// Data
import Loading from './components/common/Loading';

function App() {
  const { completedProblems, toggleProblemCompletion } = useCompletedProblems();

  const [patternsData, setPatternsData] = useState(null);
  const [problems, setProblems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      import('./data/data'),
      import('./data/allProblems')
    ]).then(([patternsModule, problemsModule]) => {
      if (isMounted) {
        setPatternsData(patternsModule.default || patternsModule.patternsData);
        setProblems(problemsModule.allProblems);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  if (loading || !patternsData || !problems) {
    return <Loading />;
  }

  // Helper to normalize pattern names for matching
  const normalize = (str) => str && str.toLowerCase().replace(/[^a-z0-9]/g, '');

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    key="home"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <HomePage />
                  </motion.div>
                }
              />
              <Route
                path='/problems'
                element={
                  <motion.div
                    key="problem-list"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <LeetCodePatterns patterns={problems} completedProblems={completedProblems} toggleProblemCompletion={toggleProblemCompletion} />
                  </motion.div>
                }
              />
              <Route
                path="/pattern/:patternName"
                element={
                  <motion.div
                    key="pattern-dynamic"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <PatternPageWrapper patternsData={patternsData} />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

// Wrapper to extract param and robustly find the pattern
function PatternPageWrapper({ patternsData }) {
  const { patternName } = useParams();
  const normalize = (str) => str && str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizedParam = normalize(patternName);
  const patternData = patternsData.find(
    (pattern) => normalize(pattern.id) === normalizedParam || normalize(pattern.title) === normalizedParam
  );
  return <PatternPage patternData={patternData} patternId={patternName} />;
}

export default App
