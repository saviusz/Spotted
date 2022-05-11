export default interface User{
    username: string;
    fullName: string;
    biography: string;
    isVerified: boolean;
    picture: {
        url: string,
        isAnon: boolean
    }
}