'use client';

import StartPage from '@/component/page/StartPage';
import { useState } from 'react';
import QuestionPage from '@/component/page/QuestionPage';
import DisplayResultPage from '@/component/page/DisplayResultPage';
import ResultPage from '@/component/page/ResultPage';

export default function Home() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);

  if (step === 0) return <StartPage nextStep={nextStep} />;
  if (step >= 1 && step <= 7) return <QuestionPage questionIndex={step - 1} nextStep={nextStep} />;
  if (step === 8) return <DisplayResultPage nextStep={nextStep} />;
  if (step === 9) return <ResultPage />;

  return null;
}
