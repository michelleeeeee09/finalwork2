'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import q1Up from '@/../public/1.question/q1-up.png';
import q1Down from '@/../public/1.question/q1-down.png';
import circle2Img from '@/../public/1.question/blur-circle-2.png';
import { usePsyStore, useQuestionStore } from '@/app/store/store';

export default function QuestionPage({ questionIndex, nextStep }) {
  const questionData = useQuestionStore((state) => state);
  const psyData = usePsyStore((state) => state);

  const clickAnswer = (option) => {
    psyData.updateScore(psyData.score + option.value);
    nextStep();
  };

  const getColor = () => {
    const colorMap = [
      { bg: '#BEE351', shadow: '#90B62A' },
      { bg: '#DD3E3E', shadow: '#8D4509' },
      { bg: '#89BCFF', shadow: '#1098EC' },
      { bg: '#C1A2FF', shadow: '#8A5CFF' },
      { bg: '#FFAEC8', shadow: '#E84C88' },
      { bg: '#FFC760', shadow: '#E0A700' },
      { bg: '#999999', shadow: '#666666' }
    ];
    return colorMap[questionIndex] || { bg: '#CCCCCC', shadow: '#888888' };
  };

  const currentColor = getColor();

  return (
    <>
      <MobileFrame>
        <Image className="absolute top-0 -translate-y-1/2" src={circle2Img} alt="circle2Img" />

        <div className="flex flex-col items-center gap-[26px]">
          <Image src={q1Up} className="w-[88px]" alt="q1Up" />

          <div
            className="rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-xl border-2"
            style={{ color: currentColor.shadow, borderColor: currentColor.shadow }}
          >
            Q{questionIndex + 1}
          </div>

          <div
            className="text-center font-bold text-3xl mb-[60px]"
            style={{ color: currentColor.shadow }}
          >
            {questionData.questions[questionIndex + 1].title}
          </div>

          {questionData.questions[questionIndex + 1].options.map((option) => (
            <div
              key={option.title}
              onClick={() => clickAnswer(option)}
              className="w-full rounded-full text-white py-[16px] text-sm flex justify-center items-center font-medium
                cursor-pointer hover:translate-y-0.5 transition"
              style={{
                backgroundColor: currentColor.bg,
                boxShadow: `0px 4px 0px 1px ${currentColor.shadow}`
              }}
            >
              {option.title}
            </div>
          ))}

          <Image src={q1Down} className="w-[88px]" alt="q1Down" />
        </div>

        <Image className="absolute bottom-0 translate-y-1/2" src={circle2Img} alt="circle2Img" />
      </MobileFrame>
    </>
  );
}