import handshake from "../components/handshake.png";
function Connect(){
    return(<>
    <div className="text-center font-mono">
        <div className="flex gap-4 justify-center items-center">
            <div>
                Connect
            </div>
            <div>
                <img src={handshake} width={120}/>
            </div>
        </div>
         <br/>
        <div className="flex justify-center gap-4 text-xs">
            <div>
            <a href="https://drive.google.com/file/d/1hPw640dU9FMR6ksIZUMQKc4SOJpDIVhC/view?usp=sharing" target="_blank">Download Resume {"     "}</a>
            <a href="https://www.linkedin.com/in/saksham-2811/" target="_blank">
                LinkedIn  {"     "}
            </a>
            <a href="https://github.com/sakshamsahore2811" target="_blank">
                Github  {"     "}
                </a> 
                <a href="mailto:saksham0sharma@proton.me">
                    saksham0sharma@proton.me  {"     "}
                </a>
                <a href="mailto:sakshamsahore@gmail.com" target="_blank">
                    sakshamsahore@gmail.com {"     "}
                </a>
                           </div>
        </div>
    </div>
    </>);
}
export default Connect;