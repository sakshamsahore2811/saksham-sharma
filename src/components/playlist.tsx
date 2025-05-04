import music from "../components/music.png";
import sampleAudio from "../components/godis.mp3"; // adjust the path as needed

function Playlist() {
    return (
        <>
            <div className="font-mono text-center">
                <div className="justify-center flex items-center gap-2">
                    <div>What I listen to</div>
                    <div>
                        <img src={music} height={35} width={35} alt="Music Icon" />
                    </div>
                </div>

                <br />

                <div className="text-xs">
                    Spotify Playlist -{" "}
                    <a
                        href="https://open.spotify.com/playlist/2GBWu18B3lySAUPWMyzNsI?si=HrZdhsHDQKipJ73_Wy7tiA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 hover:text-blue-800"
                    >
                        https://open.spotify.com/playlist/2GBWu18B3lySAUPWMyzNsI?si=HrZdhsHDQKipJ73_Wy7tiA
                    </a>
                </div>

                <br />

                <div className="mt-4 flex justify-center gap-10 items-center">
                    <div className="text-center text-sm">
                        Kanye west
                    </div>
                    <div>

                 
                    <audio controls>
                        <source src={sampleAudio} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Playlist;
