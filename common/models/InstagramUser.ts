import User from "./User";

export default interface InstagramUser extends User{
    stats: {
        followers: number,
        following: number,
        posts: number, 
        igTV: number,
    }
}