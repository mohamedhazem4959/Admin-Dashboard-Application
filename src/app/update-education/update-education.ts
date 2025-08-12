import { Component, OnInit } from '@angular/core';
import { IAddEducation, IeducationItem } from '../ieducation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EducationS } from '../education-s';

@Component({
  selector: 'app-update-education',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './update-education.html',
  styleUrl: './update-education.css'
})
export class UpdateEducation implements OnInit{
userId: string = '';
  eduId: string = ''; 
  educations: IeducationItem[] = [];

  reactiveForm: FormGroup = new FormGroup({
    title: new FormControl<string>(''),
    description: new FormControl<string>('')
  })

  constructor(private _eduS:EducationS){ }

  ngOnInit(): void {
    this._eduS.getAllData().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.userId = data[0]._id;
          this.educations = data[0].Education;
        }
      }
    })
  }

  selectEducation(event:Event){
    const selectedId = (event.target as HTMLSelectElement).value;
    const selected = this.educations.find( e => e._id === selectedId);
    if(!selected) return;

    this.eduId = selected._id!;
    this.reactiveForm.patchValue({
      title: selected.title,
      description: selected.description
    });
  }


  updateSelectedEducation(){
    if (!this.userId || !this.eduId) {
      alert('Please select a education to update.');
      return;
    }

    const updateDate: IeducationItem = {
      title:this.reactiveForm.value.title!,
      description: this.reactiveForm.value.description!
    }

    this._eduS.updateEducation(this.userId,this.eduId,updateDate).subscribe({
      next: (res)=>{
        console.log('Education updated: ' , res);
        alert('education updated  succussfully')
      },
      error: (err)=>{
        console.error(err);
        alert('Faild to update education')
      }
    })
  }

}
