import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  title = 'Genius Quotes ';
  quotes: Quotes[] = [
    new Quotes(
      7,
      'Carlos',
      'nony',
      'Always remember that you are absolutely unique. Just like everyone else',
      'margrate mead ',
      new Date(2021, 10, 11),
      0,
      0
    ),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  addQuote(quote: Quotes) {
    let arraysize = this.quotes.length;
    quote.id = arraysize + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  quoteDelete(isRead: any, index: number) {
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  displayInfo(index: number) {
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  findMax() {
    return Math.max.apply(
      Math,
      this.quotes.map((quote) => quote.upvotes)
    );
  }
  constructor() {}

  ngOnInit() {}
}
