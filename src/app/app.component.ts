import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatbot';
  
showPopup: boolean = false;

onShowChat(): void {
  this.showPopup = true;
}

onHideChat(): void {
  this.showPopup = false;
}
}
