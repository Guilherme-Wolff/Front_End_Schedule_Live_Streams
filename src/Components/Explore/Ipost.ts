export interface Ipost {
    url:string
    createdby: string
    bio: string
    comments: [
        username: string,
        message: string,
        created_at : string
    ],
    how__many__licked: number,
    created_at: string
}