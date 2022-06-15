import { IgApiClient, UploadPhotoOptions, UploadVideoOptions } from "instagram-private-api"
import { PathLike } from "fs"
import { readFile } from "fs/promises"
import { fileTypeFromBuffer,  } from "file-type";

const ig = new IgApiClient();

export default class Agent {
    private static singleton : Agent;


    constructor(){
        if(Agent.singleton !== undefined) return Agent.singleton;
        
        ig.state.generateDevice(process.env.IG_USERNAME as string);
    }

    public async postToFeed(content : PathLike, caption : string, options : UploadPhotoOptions | UploadVideoOptions){
        const file = await readFile(content);
        const type = (await fileTypeFromBuffer(file));

        if (type?.mime?.startsWith("video")) {
            
        }
        if (type?.mime?.startsWith("image")) {
            
        }

        return new Error("Cannot post")
    }
}