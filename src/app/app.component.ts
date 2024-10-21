import { Component } from '@angular/core';
import { PlayingCardComponent } from "./component/playing-card/playing-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.compenent.css"
})
export class AppComponent {

}
