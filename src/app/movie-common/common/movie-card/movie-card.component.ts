import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() movie: any;
  noMovieResult: string = 'No searched result !';

  constructor() { }

  ngOnChanges() {
    if (this.movie.Response === 'False') {
      this.noMovieResult = this.movie.Error;
    }
  }
}
