export interface IPost {
    id?: number,
    title: string,
    content: string,
    short_desc: string,
    created_at: string,
    categoryId?: number
}