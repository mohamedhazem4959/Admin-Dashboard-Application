import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IAddProject, Iproject } from '../iprodject';
import { ProjectsS } from '../project-s';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-project',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-project.html',
  styleUrl: './add-project.css'
})
export class AddProject implements OnInit {
  userId: string = '';
  projects?: Iproject[] = [];
  newProject: IAddProject = { title: '', description: '' }
  reactiveForm:FormGroup =new FormGroup({
      title: new FormControl('') ,
      description: new FormControl('') ,
    })

  constructor(private _projectS: ProjectsS) {

  }

  ngOnInit(): void {
    this._projectS.getAllData().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.userId = data[0]._id;
        }
      },
      error: (err) => console.error('Error fetching data', err)
    });
  }

  addNewProject() {
    this._projectS.addProject(this.userId, this.reactiveForm.value).subscribe({
      next: res => {
        console.log('Project added: ', res);
        this.reactiveForm.reset();
      },
      error: err => console.error('Add project failed', err)
    }
  )
  }
}
