
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { WhySoPopular } from './components/WhySoPopular';
import { BehavioralData } from './components/BehavioralData';
import { ReasonOne } from './components/ReasonOne';
import { ReasonTwo } from './components/ReasonTwo';
import { ReasonThree } from './components/ReasonThree';
import { ReasonFour } from './components/ReasonFour';
import { CareerData } from './components/CareerData';
import { Conclusion } from './components/Conclusion';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-fuchsia-500/30 overflow-x-hidden font-sans">
      
      {showIntro && <Intro onEnter={() => setShowIntro(false)} />}

      <main>
        <Hero />
        <WhySoPopular />
        <BehavioralData />
        <ReasonOne />
        <ReasonTwo />
        <ReasonThree />
        <ReasonFour />
        {/* 将职业数据分析放在原因四之后，总结之前 */}
        <CareerData />
        <Conclusion />
      </main>

    </div>
  );
};

export default App;
