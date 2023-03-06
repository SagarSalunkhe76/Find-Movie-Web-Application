import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../../service/sharing/sharing-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  moviedata: any = [];

  constructor(private sharedService: SharingDataService) { }

  ngOnInit() {
    this.sharedService.movie.subscribe((data: any) => {
      this.moviedata = data;
    })
  }

}
