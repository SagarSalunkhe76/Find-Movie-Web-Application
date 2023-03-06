import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './component/search/search.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCommonModule } from '../movie-common/movie-common.module';
import {
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule
} from '@angular/material';


@NgModule({
  declarations: [SearchComponent, MovieDetailsComponent, DashboardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MovieCommonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class MoviesDashboardModule { }
