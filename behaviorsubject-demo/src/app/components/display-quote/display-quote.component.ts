import { Component } from '@angular/core';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-display-quote',
  imports: [],
  templateUrl: './display-quote.component.html',
  styleUrl: './display-quote.component.css'
})
export class DisplayQuoteComponent {

  constructor(private quoteService: QuoteService){}
  
  currentQuote: string = '';

  ngOnInit(): void {
    // Subscribe the currentQuote property of quote service to get real time value
    this.quoteService.currentQuote.subscribe(
      // update the component's property
      quote => this.currentQuote = quote
    );
  }
}
