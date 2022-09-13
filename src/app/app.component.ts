import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact_App';
  public childData: string;
  public brandName: string = 'NG Contact Manager'
  notify(data) {
    this.childData = data
  }
}
