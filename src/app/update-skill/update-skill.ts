import { Component } from '@angular/core';
import { Iskills, IUpdateSkill } from '../iskills';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SkillsS } from '../skills-s';
import { IUpdateAbout } from '../ibio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-skill',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './update-skill.html',
  styleUrl: './update-skill.css'
})
export class UpdateSkill {
userId: string = '';
  skillId: string = ''; 
  skills: IUpdateSkill[] = [];

  reactiveForm: FormGroup = new FormGroup({
    title: new FormControl<string>(''),
    description: new FormControl<string>('')
  })

  constructor(private _skillS: SkillsS) { }



  ngOnInit(): void {
    this._skillS.getAllData().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.userId = data[0]._id;
          this.skills = data[0].About.skills;
        }
      }
    })
  }

  selectSkill(event: Event) {
    const selectedId = (event.target as HTMLSelectElement).value;
    const selected = this.skills.find(p => p._id === selectedId);
    if (!selected) return;

    this.skillId = selected._id!;
    this.reactiveForm.patchValue({
      title: selected.title,
      description: selected.description
    });
  }



  updatedSelectedSkill() {
    if (!this.userId || !this.skillId) {
      alert('Please select a skill to update.');
      return;
    }
    const updateData: IUpdateSkill = {
      title: this.reactiveForm.value.title!,
      description: this.reactiveForm.value.description!
    }

    this._skillS.updateSkill(this.userId, this.skillId, updateData).subscribe({
      next: (res) => {
        console.log('Project updated: ', res);
        alert('project updated succussfully')
      },
      error: (err) => {
        console.error(err);
        alert('Faild to update project')
      }
    })
  }

}
