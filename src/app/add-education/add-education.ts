import { Component, OnInit } from '@angular/core';
import { IAddEducation, Ieducation } from '../ieducation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EducationS } from '../education-s';

@Component({
  selector: 'app-add-education',
  imports: [ReactiveFormsModule],
  templateUrl: './add-education.html',
  styleUrl: './add-education.css'
})
export class AddEducation implements OnInit{
  userId: string = '';
  educations?:Ieducation[]=[];
  newEducation: IAddEducation = {title: '' , description:''}
  reactiveForm:FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private _educationS: EducationS){ }
  
  ngOnInit(): void {
    this._educationS.getAllData().subscribe({
      next: (data)=>{
        if (data.length > 0) {
          this.userId = data[0]._id;
        }
      },
      error: (err)=> console.error('Error fetching data',err)
    });
  }

  addNewEducation(){
    this._educationS.addEducation(this.userId , this.reactiveForm.value).subscribe({
      next: res =>{
        console.log('Education added: ' , res)
        this.reactiveForm.reset();
      },
      error:err => console.error('Add education failed' , err)
    })
  }

}
