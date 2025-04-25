import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
  <app-header/>
  <router-outlet>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculatorApp';
}
