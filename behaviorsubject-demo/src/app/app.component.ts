import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayQuoteComponent } from './components/display-quote/display-quote.component';
import { UpdateQuoteComponent } from './components/update-quote/update-quote.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayQuoteComponent, UpdateQuoteComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'behaviorsubject-demo';
}
