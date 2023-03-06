import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesDashboardModule } from './movies-dashboard/movies-dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MoviesDashboardModule,
    BrowserAnimationsModule,
      MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
