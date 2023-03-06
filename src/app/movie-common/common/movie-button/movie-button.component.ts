
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-button',
  templateUrl: './movie-button.component.html',
  styleUrls: ['./movie-button.component.scss']
})
export class MovieButtonComponent implements OnInit {

  @Input() btnColor: string;
  @Input() btnId: string;
  @Input() btnText: string;

  @Output() btnClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clicked(btnId:string) {
    this.btnClick.emit(btnId);
  }
}
