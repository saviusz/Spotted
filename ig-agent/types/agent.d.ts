/// <reference types="node" />
import { UploadPhotoOptions, UploadVideoOptions } from "instagram-private-api";
import { PathLike } from "fs";
export default class Agent {
    private static singleton;
    constructor();
    postToFeed(content: PathLike, caption: string, options: UploadPhotoOptions | UploadVideoOptions): Promise<Error>;
}
