'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/../public/4.result/1.png';
import result2 from '@/../public/4.result/2.png';
import result3 from '@/../public/4.result/3.png';
import result4 from '@/../public/4.result/4.png';
import result5 from '@/../public/4.result/5.png';
import result6 from '@/../public/4.result/6.png';

const results = [
  {
    title: '芝士奶蓋春烏龍',
    brand: '得正',
    image: result5,
    hashtags: ['#清爽自律', '#理智選擇'],
    description: '外表冷靜，內心柔軟，像奶蓋下藏著一壺濃郁烏龍，是懂得平衡的存在。'
  },
  {
    title: '紅柚翡翠',
    brand: '龜記茗品',
    image: result6,
    hashtags: ['#柑橘清新感', '#理性療癒系'],
    description: '清新果斷，像一陣涼風吹進心裡，你是朋友圈中的理性療癒系。'
  },
  {
    title: '粉粿桂花檸檬',
    brand: '一沐日',
    image: result4,
    hashtags: ['#花香微甜', '#古靈精怪'],
    description: '古靈精怪又不失優雅，總有讓人驚喜的組合技，是社交場合的潤滑劑。'
  },
  {
    title: '杏仁凍五桐茶',
    brand: '五桐號',
    image: result3,
    hashtags: ['#經典茶底', '#溫暖系人格'],
    description: '看似浮誇實則溫暖，願意為身邊人付出真心，是穩定又有記憶點的存在。'
  },
  {
    title: '波波粿粿鮮奶茶',
    brand: '珍煮丹',
    image: result2,
    hashtags: ['#爆料大滿足', '#討喜人氣王'],
    description: '你是經典人氣王，討喜又有想法，總是讓人忍不住想靠近。'
  },
  {
    title: '芋頭鮮奶',
    brand: '迷客夏',
    image: result1,
    hashtags: ['#濃郁系', '#柔軟深情'],
    description: '你是那種不說話也閃閃發光的人，外柔內剛，令人著迷的深度系。'
  },
  {
    title: '冷露歐蕾',
    brand: '可不可紅茶',
    image: result1,
    hashtags: ['#神秘氣場', '#沉穩系代表'],
    description: '你是最懂自己的人，冷靜沉穩、神秘迷人，是懂得選擇、值得品味的存在。'
  }
];

export default function ResultPage() {
  const { score } = usePsyStore((state) => state);

  const playAgain = () => {
    window.location.reload();
  };

  const getResult = () => {
    if (score <= 9) return results[0];
    if (score <= 12) return results[1];
    if (score <= 15) return results[2];
    if (score <= 18) return results[3];
    if (score <= 21) return results[4];
    if (score <= 24) return results[5];
    return results[6];
  };

  const result = getResult();

  return (
    <>
      <MobileFrame>
        <div className="flex flex-col items-center text-center gap-4 px-4 pb-10">
          <h2 className="text-[#5C2B00] mt-8 text-lg font-semibold">你的命中註定飲料是</h2>
          <h1 className="text-2xl font-bold text-[#5C2B00]">{result.title}</h1>
          <p className="text-[#A6781C] text-sm">（{result.brand}）</p>
          <Image src={result.image} alt={result.title} className="w-[120px] h-[120px] my-2" />
          
          <div className="flex flex-col gap-2">
            {result.hashtags.map((tag) => (
              <div
                key={tag}
                className="text-xs bg-white text-[#5C2B00] border border-[#5C2B00] rounded-full px-4 py-1"
              >
                {tag}
              </div>
            ))}
          </div>

          <p className="text-sm text-[#444] leading-relaxed px-2 mt-4">{result.description}</p>

          <div
            className="mt-6 bg-[#89BCFF] w-full rounded-full text-white py-[16px] text-sm flex justify-center items-center font-medium shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition"
            onClick={playAgain}
          >
            再玩一次
          </div>
        </div>
      </MobileFrame>
    </>
  );
}