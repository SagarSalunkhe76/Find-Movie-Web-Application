import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieInputComponent } from './common/movie-input/movie-input.component';
import { MovieButtonComponent } from './common/movie-button/movie-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule, MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MovieCardComponent } from './common/movie-card/movie-card.component'
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieInputComponent,
    MovieButtonComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    NgbModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FormsModule
  ],
  exports: [
    MovieInputComponent,
    MovieButtonComponent,
    MovieCardComponent
  ]
})
export class MovieCommonModule { }
