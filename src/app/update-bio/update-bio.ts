import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BioS } from '../bio-s';

@Component({
  selector: 'app-update-bio',
  imports: [ReactiveFormsModule],
  templateUrl: './update-bio.html',
  styleUrl: './update-bio.css'
})
export class UpdateBio implements OnInit {
  userId = '';
  reactiveForm: FormGroup = new FormGroup({
    bio: new FormControl(''),
  })

  constructor(private _bioS: BioS) { }

  ngOnInit(): void {
    this._bioS.getAllData().subscribe({
      next: (res)=>{
        const userData = res[0];
        this.userId = userData._id;
        this.reactiveForm.patchValue({
          bio:userData.About.bio
        })
      }
    })

  }

  saveBio(){
    const bioValue = this.reactiveForm.value.bio;
    this._bioS.updateBio(this.userId,bioValue).subscribe({
      next: ()=> alert('bio updated successfully!')
    })
  }
}
