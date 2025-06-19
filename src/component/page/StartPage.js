'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import startBtn from '@/../public/0.start/startBtn.png';

export default function StartPage({ nextStep }) {
  return (
    <>
      <MobileFrame>
        <div className="w-full min-h-screen flex justify-center items-center px-4">
          <div className="max-w-[380px] w-full flex flex-col items-center text-center gap-8">
            <h1 className="text-[24px] font-bold text-[#5C2B00] leading-snug">
              你是哪一杯<br />命中註定の手搖？
            </h1>
            <p className="text-[#8B4513] text-[14px] leading-loose whitespace-pre-line">
              有些人只是嘴巴寂寞。
              不管是心煩、曬太陽、加班還是失戀，
              你總會下意識走進巷口那家飲料店。
              每個人心中，都藏著一杯屬於自己的命定飲料。
              清爽派？甜爆派？中杯少糖去冰？
              是時候揭曉——
              你到底是哪一款手搖！
            </p>
            <Image
              onClick={nextStep}
              className="w-[160px] cursor-pointer hover:scale-105 transition-transform"
              src={startBtn}
              alt="start button"
            />
          </div>
        </div>
      </MobileFrame>
    </>
  );
}