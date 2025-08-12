import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Iskills } from '../iskills';
import { IAddEducation } from '../ieducation';
import { SkillsS } from '../skills-s';

@Component({
  selector: 'app-add-skill',
  imports: [ReactiveFormsModule],
  templateUrl: './add-skill.html',
  styleUrl: './add-skill.css'
})
export class AddSkill implements OnInit{
  userId:string = '';

  educations?: Iskills[] = [];
  newEducation: IAddEducation = {title: '' , description: ''}

  reactiveForm:FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private _skillS:SkillsS){ }

  ngOnInit(): void {
    this._skillS.getAllData().subscribe({
      next: (data)=>{
        if (data.length > 0) {
          this.userId = data[0]._id
        }
      },
      error: (err) => console.error('Error fetching data ' , err)
    })
  }

  addNewEducation(){
    this._skillS.addSkill(this.userId , this.reactiveForm.value).subscribe({
      next: res =>{
        console.log('Skill added: ' , res)
        this.reactiveForm.reset()
      },
      error: err=> console.error('Add skill failed ' , err)
    })
  }
}
