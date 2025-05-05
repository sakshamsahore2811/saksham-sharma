
import cat from "../src/components/cat-modified.png";
import Footer from "./components/footer.tsx";
import Navbar from "./components/navbar.tsx";
import Projects from "./components/projects.tsx";
import Skills from "./components/skills.tsx";
import Playlist from "./components/playlist.tsx";
import Connect from "./components/connect.tsx";
import {useRef, useEffect} from "react";
function App() {
   const characterRef = useRef<HTMLDivElement>(null);

 
 

  useEffect(() => {
    const char = characterRef.current;
if (!char) return;

    let mouseX = 0, mouseY = 0;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
  
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
  
    const animate = () => {
      currentX = lerp(currentX, mouseX, 0.01); // adjust 0.05 to make it slower or faster
      currentY = lerp(currentY, mouseY, 0.01);
      if (char) {
        char.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      requestAnimationFrame(animate);
    };
  
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - (char?.offsetWidth || 0) / 2;
      mouseY = e.clientY - (char?.offsetHeight || 0) / 2;
      // updatePupils(e);
    };
  
    // const updatePupils = (e: MouseEvent) => {
    //   const movePupil = (eye: HTMLDivElement) => {
    //     const rect = eye.getBoundingClientRect();
    //     const dx = e.clientX - (rect.left + rect.width / 2);
    //     const dy = e.clientY - (rect.top + rect.height / 2);
    //     const angle = Math.atan2(dy, dx);
    //     const radius = 4;
  
    //     const pupil = eye.querySelector(".pupil") as HTMLDivElement;
    //     pupil.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`;
    //   };
  
    //   if (leftPupilRef.current) movePupil(leftPupilRef.current);
    //   if (rightPupilRef.current) movePupil(rightPupilRef.current);
    // };
  
    animate();
    document.addEventListener("mousemove", handleMouseMove);
  
    // const blinkInterval = setInterval(() => {
    //   setIsBlinking(true);
    //   setTimeout(() => setIsBlinking(false), 200);
    // }, 2000);
  
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      // clearInterval(blinkInterval);
    };
  }, []);
  

  return (
    <>
      <Navbar />
      <div className="w-full text-center font-mono relative overflow-hidden min-h-[300px]">
        <div
          ref={characterRef}
          className="character absolute transition-transform duration-300 ease-out"
        >
          <img src={cat} height={50} width={50} />
          {/* <div className="eyes-container absolute top-[20%] left-[25%] w-[50px] h-[20px] flex justify-between">
            <div ref={leftPupilRef} className="eye relative w-[20px] h-[20px] bg-white rounded-full border">
              <div
                className={`pupil absolute w-[8px] h-[8px] bg-black rounded-full transition-transform duration-75 ${
                  isBlinking ? "opacity-0" : "opacity-100"
                }`}
              ></div> */}
            {/* </div> */}
            {/* <div ref={rightPupilRef} className="eye relative w-[20px] h-[20px] bg-white rounded-full border"> */}
              {/* <div
                className={`pupil absolute w-[8px] h-[8px] bg-black rounded-full transition-transform duration-75 ${
                  isBlinking ? "opacity-0" : "opacity-100"
                }`}
              ></div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
        <div className="flex items-center justify-center gap-2 mt-32">
          <div>Saksham Sharma [Age 22]</div>
        </div>
        <div className="text-sm mt-2 text-center">
           Currently{" "}
          <a href="https://www.loopwork.co" target="_blank">
            @Loop Subscriptions
          </a>, Gurugram, IN
        </div>
      </div>
      <hr/>
      <br />
  
      <Projects />
      <br />
      <Skills />
      <br />
      <Playlist />
      <br />
      <Connect />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
