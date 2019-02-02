import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ravi Projects';
  headerName = "App Header";
  message = "This is messgae from parent component to child components";
  message1 = "This is messgae from parent component to child components";
}
