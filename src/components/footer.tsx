import { useEffect, useState } from 'react';
import Fox from "../components/fox.png";

function Footer() {
  const [tokyoTime, setTokyoTime] = useState('');
  const [zCount, setZCount] = useState(0);

  useEffect(() => {
    const updateTokyoTime = () => {
      const now = new Date();
      const tokyoOptions = {
       timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const timeString = now.toLocaleTimeString('en-US', tokyoOptions);
      setTokyoTime(timeString);
    };

    updateTokyoTime();
    const timeInterval = setInterval(updateTokyoTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  // Z Animation Logic
  useEffect(() => {
    const zInterval = setInterval(() => {
      setZCount(prev => (prev + 1) % 4); // Cycle through 0 to 3
    }, 1000);
    return () => clearInterval(zInterval);
  }, []);

  const zStyles = [
    "text-md absolute top-[-10px] left-[-10px]",
    "text-sm absolute top-[-20px] left-[-20px]",
    "text-xs absolute top-[-30px] left-[-30px]",
  ];

  return (
    <div className="font-mono bottom-0 flex justify-center items-center gap-2 relative text-center w-full">

       
      <div className="relative w-[30px] h-[30px]">
        <img src={Fox} height={25} width={25} alt="Fox" />
        {Array.from({ length: zCount }).map((_, i) => (
          <div key={i} className={`${zStyles[i]} text-gray-500 font-mono`}>Z</div>
        ))}
      </div>
      <div>
        Time in India - {tokyoTime}
      </div>
    </div>
  );
}

export default Footer;
