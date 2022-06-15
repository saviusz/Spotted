import "dotenv/config"
import { IgApiClient } from "instagram-private-api"
import ipc from "node-ipc"

ipc.config.id = "ig-spotted-agent";
ipc.config.retry = 1500;


const ig = new IgApiClient();
ig.state.generateDevice(process.env.IG_USERNAME as string);

(async () => {
    await ig.simulate.preLoginFlow();

    const loggedInUser = await ig.account.login(process.env.IG_USERNAME as string, process.env.IG_PASSWORD as string);
    
    process.nextTick(async () => await ig.simulate.postLoginFlow());

    ipc.serve(
        function(){
            let server = ipc.server;

            server.on("ig:funct", async (data)=>{
                try {
                 console.log(eval(data))   
                } catch (error) {
                    console.log(error);
                }
            })
        }
    );

    ipc.server.start();
})().catch(
    console.error
);
