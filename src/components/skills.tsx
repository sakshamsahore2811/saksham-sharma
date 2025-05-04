import Bulb from "../components/bulb.png";
function Skills(){
    return(<>
    <div className="font-mono text-center">
        <div className="flex items-center justify-center">
            <div>
                What I know
            </div>
        
            <div className="">
                <img src={Bulb} height={45} width={45}/>
            </div>
        </div>
        <br/>
        <div className="text-xs">
            HTML, CSS, Javascript, Typescript, React, MongoDB, Redux, Liquid, Design, Express, Python, Data Structures, Problem Solving, Critical Thinking
        </div>

    </div>

    </>);
}
export default Skills;