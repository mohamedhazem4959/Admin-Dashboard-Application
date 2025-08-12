import { Component } from '@angular/core';
import { UpdateBio } from '../update-bio/update-bio';
import { AddProject } from '../add-project/add-project';
import { AddEducation } from '../add-education/add-education';
import { AddSkill } from '../add-skill/add-skill';
import { UpdateDeleteProject } from '../update-delete-project/update-delete-project';
import { UpdateSkill } from '../update-skill/update-skill';
import { UpdateEducation } from '../update-education/update-education';
import { UpdateContact } from '../update-contact/update-contact';
import { UpdateMyphilosophy } from '../update-myphilosophy/update-myphilosophy';

@Component({
  selector: 'app-dashboard',
  imports: [UpdateBio,AddProject,AddEducation,AddSkill,UpdateDeleteProject,UpdateSkill,UpdateEducation,UpdateContact,UpdateMyphilosophy],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
