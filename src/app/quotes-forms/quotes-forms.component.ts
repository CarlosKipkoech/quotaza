import { Quotes } from '../quotes';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quotes-forms',
  templateUrl: './quotes-forms.component.html',
  styleUrls: ['./quotes-forms.component.css'],
})
export class QuotesFormsComponent implements OnInit {
  quoted = new Quotes(0, '', '', '', '', new Date(), 0, 0);
  @Output() add = new EventEmitter<Quotes>();

  addQuote() {
    this.add.emit(this.quoted);
    this.quoted = new Quotes(0, '', '', '', '', new Date(), 0, 0);
  }
  constructor() {}

  ngOnInit() {}
}
