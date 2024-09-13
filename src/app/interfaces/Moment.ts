export interface Moment {
    id?: number,
    title: string,
    description: string,
    image?: string,
    created_at?: Date,
    update_at?: Date,
    coments?: [{text:string, username: string}];
}
