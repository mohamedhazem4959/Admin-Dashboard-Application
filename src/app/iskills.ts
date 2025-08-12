export interface Iskills {
    skills:IAddSkills[]
}

export interface IAddSkills{
    title:string;
    description:string;
    _id?:string
}

export interface IUpdateSkill{
  title: string;
  description: string;
  _id?: string;

}