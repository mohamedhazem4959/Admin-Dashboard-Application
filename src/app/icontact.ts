export interface IContact {
  platform: string;  
  url: string;      
  _id?: string;      
}

export interface IUserContact {
  contact: IContact[];  
}
