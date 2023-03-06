import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharingDataService } from 'src/app/movies-dashboard/service/sharing/sharing-data.service';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styleUrls: ['./movie-input.component.scss']
})
export class MovieInputComponent implements OnInit {

  value: string = '';

  @Input() inputId: string;
  @Input() inputPlaceholder: string;
  @Input() inputDisabled: boolean;
  @Output() inputValue = new EventEmitter<any>();

  constructor(private sharedService: SharingDataService) { }

  ngOnInit() {
    this.sharedService.clear.subscribe((data: boolean) => {
      if (data) {
        this.value = ''
      }
    })
  }

  enteredText() {
    this.inputValue.emit({ id: this.inputId, value: this.value });
  }

}
