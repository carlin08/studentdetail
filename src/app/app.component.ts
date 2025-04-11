import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';

@Component({
  selector: 'app-root',
  imports: [StudentdetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'addstudent';
}
