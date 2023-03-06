import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api/api.service';
import { SharingDataService } from '../../service/sharing/sharing-data.service';
import { Isearch } from './serach.modal';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  searchObj: Isearch = {
    name: '',
    id: ''
  }

  movieSearchBoxdisable: boolean = false;
  imdbBoxdisable: boolean = true;
  constructor(private api: ApiService, private sharedService: SharingDataService) { }

  ngOnInit() {

  }

  getMovie(event: any) {
    switch (event.id) {
      case "movieSearchBox":
        this.searchObj.name = event.value;
        break;
      case "imdbBox":
        this.searchObj.id = event.value;
        break;
    }
  }

  buttonClick(event) {
    if (event === "searchBtn") {
      this.apiCall(this.searchObj);
      this.sharedService.sendClear();
    }
    if (event === "clearBtn") {
      this.searchObj.name = '',
        this.searchObj.id = '',
        this.sharedService.sendClear();
    }
  }

  apiCall(serachParam: Isearch) {
    if (this.searchObj.name != '') {
      this.api.getMovieByTitle(serachParam).subscribe((response) => {
        this.sharedService.send(response);
      });
    }
    if (this.searchObj.id != '') {
      this.api.getMovieById(serachParam).subscribe((response) => {
        this.sharedService.send(response);
      });
    }
  }

  onItemChange(value: string) {
    switch (value) {
      case "movieSearchBox":
        this.searchObj.id = '';
        this.movieSearchBoxdisable = false;
        this.imdbBoxdisable = true;
        break;
      case "imdbBox":
        this.searchObj.name = ''
        this.imdbBoxdisable = false;
        this.movieSearchBoxdisable = true;
        break;
    }
  }
}
