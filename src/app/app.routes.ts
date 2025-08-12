import { Routes } from '@angular/router';
import { UpdateBio } from './update-bio/update-bio';
import { AddProject } from './add-project/add-project';
import { AddEducation } from './add-education/add-education';
import { AddSkill } from './add-skill/add-skill';
import { UpdateDeleteProject } from './update-delete-project/update-delete-project';
import { UpdateSkill } from './update-skill/update-skill';
import { UpdateEducation } from './update-education/update-education';
import { UpdateContact } from './update-contact/update-contact';
import { Dashboard } from './dashboard/dashboard';
import { UpdateMyphilosophy } from './update-myphilosophy/update-myphilosophy';
export const routes: Routes = [
   
    {path:'update-bio' , component:UpdateBio},
    {path:'add-project' , component:AddProject},
    {path:'add-education' , component:AddEducation},
    {path:'add-skill' , component:AddSkill},
    {path:'update-delete-project' , component:UpdateDeleteProject},
    {path:'update-sill' , component:UpdateSkill},
    {path:'update-education' , component:UpdateEducation},
    {path:'update-contact' , component:UpdateContact},
    {path:'update-myphilosophy' , component:UpdateMyphilosophy},
     {path:'' , component:Dashboard},
];
