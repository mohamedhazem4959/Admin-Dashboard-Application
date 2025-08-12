import { Component, OnInit } from '@angular/core';
import { IAddProject, Iproject } from '../iprodject';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProjectsS } from '../project-s';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-delete-project',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-delete-project.html',
  styleUrl: './update-delete-project.css'
})
export class UpdateDeleteProject implements OnInit {
  userId: string = '';
  projectId: string = '';
  projects: Iproject[] = [];

  reactiveForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private _projectS: ProjectsS) { }



  ngOnInit(): void {
    this._projectS.getAllData().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.userId = data[0]._id;
          this.projects = data[0].project;
        }
      }
    })
  }

  selectProject(event: Event) {
    const selectedId = (event.target as HTMLSelectElement).value;
    const selected = this.projects.find(p => p._id === selectedId);
    if (!selected) return;

    this.projectId = selected._id;
    this.reactiveForm.patchValue({
      title: selected.title,
      description: selected.description
    });
  }



  updatedSelectedProject() {
    if (!this.userId || !this.projectId) {
      alert('Please select a project to update.');
      return;
    }
    const updateData: IAddProject = {
      title: this.reactiveForm.value.title,
      description: this.reactiveForm.value.description
    }

    this._projectS.updateProject(this.userId, this.projectId, updateData).subscribe({
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

  deleteSelectedProject(){
        if (!this.userId || !this.projectId) {
      alert('Please select a project to update.');
      return;
    }
    this._projectS.deleteProject(this.userId , this.projectId).subscribe({
      next: (res) => {
        console.log('Project updated: ', res);
        alert('project deleted succussfully');
        this.reloadProjects()     
      },
      error: (err) => {
        console.error(err);
        alert('Faild to update project')
      }
    })
  }
  private reloadProjects() {
    this._projectS.getAllData().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.projects = data[0].project;
          this.projectId = '';
          this.reactiveForm.reset();
        }
      }
    });
  }


}
