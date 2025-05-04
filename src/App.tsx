
import cat from "../src/components/cat-modified.png";
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.tsx";
import Projects from "./components/projects.tsx";
import Skills from "./components/skills.tsx";
import Playlist from "./components/playlist.tsx";
import Connect from "./components/connect.tsx";
function App() {
  return (
    <>
    <Navbar/>
      <div className="w-full text-center font-mono">
        <div className="flex items-center justify-center gap-2">
          <img src={cat} height={75} width={75} />
          <div>Saksham Sharma [Age 22]</div>
        </div>
        <div className="text-sm mt-2 text-center">Developer - Currently <a href="https://www.loopwork.co" target="_blank">@Loop Subscriptions</a> </div>
      </div>
      <br/>
      <br/>
      <Projects/>
      <br/>
<Skills/>
<br/>
<Playlist/>
<br/>
<Connect/>
<br/>
<br/>
      <Footer />
    </>
  );
}

export default App;
