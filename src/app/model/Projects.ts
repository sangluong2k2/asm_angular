export interface IProject {
    id?:number,
    name: string,
    image: string,
    createAt: string,
    categoriesProjectId?: number,
    short_desc: string,
    desc: string
}