import music from "../components/music.png";
function Playlist(){
    return(<>
    <div className="font-mono text-center">
        <div className="justify-center flex">
            <div>  What I listen to
                </div>
                <div>
                    <img src={music} height={35} width={35}/>
                </div>
        </div>
      
        <br/>
        <div className="text-xs">
            Spotify Playlist - <a href="https://open.spotify.com/playlist/2GBWu18B3lySAUPWMyzNsI?si=HrZdhsHDQKipJ73_Wy7tiA" target="_blank">https://open.spotify.com/playlist/2GBWu18B3lySAUPWMyzNsI?si=HrZdhsHDQKipJ73_Wy7tiA</a>
        </div>
    </div>
    </>);
}
export default Playlist;