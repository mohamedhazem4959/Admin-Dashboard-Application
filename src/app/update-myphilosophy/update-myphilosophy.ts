import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PhilosophyS } from '../philosophy-s';
import { CommonModule } from '@angular/common';
import { IuserProfile } from '../iuser-profile';

@Component({
  selector: 'app-update-myphilosophy',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-myphilosophy.html',
  styleUrl: './update-myphilosophy.css'
})
export class UpdateMyphilosophy implements OnInit {
  userId = '';
  reactiveForm: FormGroup = new FormGroup({
    philosophy: new FormControl(''),
  })

  constructor(private _philoS: PhilosophyS) { }

  ngOnInit(): void {
    this._philoS.getAllData().subscribe({
      next: (res: IuserProfile[]) => {
        if (res.length > 0 && res[0].About) {
          const userData = res[0];
          this.userId = userData._id;
          this.reactiveForm.patchValue({
            philosophy: userData.About.MyPhilosophy || ''
          });
        } else {
          console.warn('No profile or About data found in API response');
        }
      },
      error: (err) => console.error('Error fetching data:', err)
    });
  }

  savePhilosophy() {
    if (!this.userId) {
      alert('Profile not loaded yet. Please wait and try again.');
      return;
    }

    const philoValue = (this.reactiveForm.get('philosophy')?.value ?? '').trim();
    this._philoS.updatePhilosophy(this.userId, philoValue).subscribe({
      next: () => alert('philosophy updated successfully!'),
      error: (err) => {
        console.error('Failed to update philosophy', err);
        alert('Failed to update philosophy');
      }
    })
  }
}
