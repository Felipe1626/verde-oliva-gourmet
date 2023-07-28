import { Component } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'verde-oliva-gourmet';
  faArrowUp = faArrowUp;
}
