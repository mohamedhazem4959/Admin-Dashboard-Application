export interface Ieducation {
    Education:IeducationItem[]
}

export interface IeducationItem{
    title:string;
    description:string;
    _id?:string;
}

export interface IAddEducation{
     title:string;
    description:string;
    _id?:string;
}
