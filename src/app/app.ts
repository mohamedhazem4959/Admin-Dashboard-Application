import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { UpdateBio } from './update-bio/update-bio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Nav,UpdateBio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard');
}
