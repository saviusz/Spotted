import InstagramUser from "./InstagramUser";
import User from "./User";

export interface FormData{
    /** Form data, like text or image */
    content: {
        type: "text" | "image" | "post",
        data: string,
        fullSize: boolean
    }
    author?: User;
}

export interface PostData extends FormData{
    description: string; 
}

export interface StoryData extends FormData{
    duration: number; 
}