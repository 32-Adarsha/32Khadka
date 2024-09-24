import {Component, inject} from '@angular/core';
import {QuoteService} from "../../../../Services/quote.service";

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
    QuoteS = inject(QuoteService)
  protected readonly QuoteService = QuoteService;

    constructor() {

    }
}
