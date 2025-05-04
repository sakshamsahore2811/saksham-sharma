import Hammer from "../components/hammer.png";
function Projects(){
    return(<>
    <div className="font-mono text-center">
        <div className="flex justify-center items-center">
        <div className="text-center">
        What I've built
        </div>
        <div className="text-center">
            <img src={Hammer} height={45} width={45}/>
        </div>
        </div>
  
        <br/>
        <div className=" text-xs">
            <div>
                <div className="text-md underline">
                Eventio - Event Calendar App</div><br/>
                What - Integrates a smart calendar widget to showcase events hosted by merchants, sell tickets and collect RSVP information.
                <br/>
                How - Built using Liquid, JavaScript, CSS, HTML, React, Polaris, Remix, Prisma and Shopify API
                <br/>
                Check it out - <a href="https://apps.shopify.com/eventio" target="_blank">https://apps.shopify.com/eventio</a>
            </div>
            <br/>
            <div>
                <div className="text-md underline">
                Curse The Cursor</div><br/>
                What - App in Shopify App Store which adds a mascot character to your store which follows the cursor in an alive way.
                <br/>
                How - Built using Liquid, JavaScript, CSS, HTML, React, Polaris, Remix, Prisma and Shopify API
                <br/>
                Why - Acts like a PopUps alternative to redirect users, promote products or provide discount codes.
                <br/>
                Status - getting published on shopify app store
            </div>
            <br/>
            <div>
                <div className="text-md underline">
                Productivo AI</div><br/>
                What - Online application to track, visualise and gamify your tasks and manage overall productivity.
                <br/>
                How - Built using Redux, CSS, HTML, React and TypeScript
                <br/>
                Check it out - <a href="https://productivo-application.vercel.app" target="_blank">https://productivo-application.vercel.app</a>
            </div>
        </div>
    </div>
    </>);

}
export default Projects;